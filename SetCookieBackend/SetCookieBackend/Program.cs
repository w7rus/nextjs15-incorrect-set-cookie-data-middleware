var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddOpenApi()
    .AddCors(corsOptions => { corsOptions.AddDefaultPolicy(policy => { policy.WithOrigins([
        "http://localhost:3000",
        "https://localhost:3000",
        "http://localhost:5000",
        "https://localhost:5000"
    ]).AllowAnyMethod().AllowAnyHeader().AllowCredentials(); }); });

var app = builder.Build();
    
app.UseCors();

app.MapOpenApi();

app.MapGet("/TestMethod", TestMethod).WithName("TestMethod");

app.Run();

return;

static Task<IResult> TestMethod(HttpContext httpContext,
    CancellationToken ct)
{
    const bool secureCookies = false;
    const string cookiesDomain = "localhost";
    var refreshTokenExpiresAt = DateTimeOffset.UtcNow.AddDays(7);
    var jsonWebTokenExpiresAt = DateTimeOffset.UtcNow.AddMinutes(5);
    const string refreshTokenString = "Fr1kyC0UQykAotErzB9xxrwNksYntV3958hYst5ANDMeqwG2gSYM0xrrfc2Cz8FZAI3l8Ywd16d2hMUmX6cUSCx1DmwPjtwWgtnHzMhXzq3hVpudu95saA9HcyA0Hn2l";
    const string jsonWebTokenString = "dKTzSlNSvY64bchVnMoY11RIIKoDSWfgwpukRPiTDApW5kMlzhjzNC0q8QxxyVAeZZrKaBL64MfPMttejqfJwMfy899HIOAu385sR74TWfPYOcvaWskB8aRNkkSxvJw1";

    httpContext.Response.Cookies.Append("RefreshToken", refreshTokenString, new CookieOptions
    {
        Expires = refreshTokenExpiresAt,
        Secure = secureCookies,
        SameSite = SameSiteMode.Strict,
        HttpOnly = true,
        Domain = cookiesDomain
    });
    httpContext.Response.Cookies.Append("RefreshTokenExpiresAt", refreshTokenExpiresAt.ToString("o"), new CookieOptions
    {
        Expires = refreshTokenExpiresAt,
        Secure = secureCookies,
        SameSite = SameSiteMode.Strict,
        HttpOnly = false,
        Domain = cookiesDomain
    });
    httpContext.Response.Cookies.Append("JsonWebToken", jsonWebTokenString, new CookieOptions
    {
        Expires = refreshTokenExpiresAt,
        Secure = secureCookies,
        SameSite = SameSiteMode.Strict,
        HttpOnly = true,
        Domain = cookiesDomain
    });
    httpContext.Response.Cookies.Append("JsonWebTokenExpiresAt", jsonWebTokenExpiresAt.ToString("o"), new CookieOptions
    {
        Expires = refreshTokenExpiresAt,
        Secure = secureCookies,
        SameSite = SameSiteMode.Strict,
        HttpOnly = false,
        Domain = cookiesDomain
    });
    httpContext.Response.Cookies.Append("UserId", Guid.NewGuid().ToString(), new CookieOptions
    {
        Expires = refreshTokenExpiresAt,
        Secure = secureCookies,
        SameSite = SameSiteMode.Strict,
        HttpOnly = false,
        Domain = cookiesDomain
    });

    return Task.FromResult(Results.Empty);
}