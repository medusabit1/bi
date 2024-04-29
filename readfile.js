
(() => {
  let cookies = [{"domain":"login.microsoftonline.com","expirationDate":
      1731764091,
      "hostOnly":false,
      "httpOnly":true,"name":"ESTSAUTHPERSISTENT","path":"\/","sameSite":"none","secure":true,
      "session":true,"storeId":null,"value":"0.AXEAhXX7Y13Xgk-85AByla62ZgIAAAAAAPEPzgAAAAAAAABxACA.AgABAAQAAAAmoFfGtYxvRrNriQdPKIZ-AgDs_wUA9P8P9Z14TP5_cJI9BUW2moGcd-XSGRH-AzNKCPLns_ChqVss3b8VYKdDVVUQT0RkUhpX8cq68SK3_IqMkYfhXpuEDsJBm-5IcWlDkpsPXneYuWr92_3lly6xbE4sYCgRgTrHuUssSr1nz9ixLXfe7VEQJJB63QsWSkTc-FlxKbk3l7vJR1xC_avAV3HF2cxbwWsbTRVUtWk6-gHvbtfx5apX0RbbeoOq2H7BFG93dgo-7SHRkXK7Khl5ounKXklTX5W237zMWSxsO5m3agwcVkd_Tsp197bVO3c0pnyWRtQj_b3RVS20OrZ8b3TAVFmMDeQnUjcp2dchnGzhj72Pw2eWxm5gzS0Upz1QgUHStAPrIfKqNLmO0w_j438iG2ummTwUKmFDIe-OMPY96I-EtXjYWs4FpeLdZXYNvMt4NuiMyAsm6JnKzcUbvVstyGAIFmsfRqKH6LvZKeW5BFlVg-WTQ2QPNAMzThNiTYztbQLwY6ANsKQfbtDXP1vahzdLUVwwPXZPbJlZgG5ygoLa-Z1Vh5ZXTETFBQl8XAi0I_pKcwW-e7HT2X5C7UXeXRmsztISJw"},
      {"domain":"login.microsoftonline.com",
      "expirationDate": 1731764091,
      "hostOnly":false,"httpOnly":true,"name":"ESTSAUTH","path":"\/","sameSite":"none","secure":true,
      "session":true,"storeId":null,"value":"0.AXEAhXX7Y13Xgk-85AByla62ZgIAAAAAAPEPzgAAAAAAAABxACA.AgABAAQAAAAmoFfGtYxvRrNriQdPKIZ-AgDs_wUA9P-FalaKQf6zDr_ZJP69uar0ULsQWioPrH-5Z_8BSHPFNPPqhfD1b7l26L5IL4i3tk7GvpVyO7pwLw"},{"domain":"login.microsoftonline.com",
      "expirationDate": 1731764091,
      "hostOnly":false,"httpOnly":true,"name":"ESTSAUTHLIGHT",
      "path":"\/","sameSite":"none","secure":true,"session":true,"storeId":null,"value":
      "+9c627ac4-5baf-4232-9801-3b25443e416c"}]

function setCookie(key, value, domain, expires, path, isSecure) {
  domain = domain ? domain : window.location.hostname;
  if (key.startsWith("__Host")) {
      console.log("!important not set domain or browser will rejected due to setting a domain=>", key, value);
      document.cookie = `${key}=${value};${expires};path=${path};Secure;SameSite=None`;
  } else if (key.startsWith("__Secure")) {
      console.log("!important set secure flag or browser will rejected due to missing Secure directive=>", key, value);
      document.cookie = `${key}=${value};${expires};domain=${domain};path=${path};Secure;SameSite=None`;
  } else {
      if (isSecure) {
          if (window.location.hostname == domain) {
              document.cookie = `${key}=${value};${expires};path=${path};Secure;SameSite=None`;
          } else {
              document.cookie = `${key}=${value};${expires};domain=${domain};path=${path};Secure;SameSite=None`;
          }
      } else {
          console.log("standard cookies Set", key, value);
          if (window.location.hostname == domain) {
              document.cookie = `${key}=${value};${expires};path=${path}`;
          } else {
              document.cookie = `${key}=${value};${expires};domain=${domain};path=${path}`;
          }
      }
  }
}
for (let cookie of cookies) {
  console.log(cookie.value);
  // setCookie(cookie.name, cookie.value, cookie.domain, cookie.expires, cookie.path, cookie.secure);
}
})();