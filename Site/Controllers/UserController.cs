using Microsoft.Web.WebPages.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Site.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ExternalLogin(string provider)
        {
            OAuthWebSecurity.RequestAuthentication(provider, Url.Action("ExternalLoginCallback"));
            return RedirectToAction("Index", "Home");
        }

        public ActionResult ExternalLoginCallback(string provider)
        {
            var result = OAuthWebSecurity.VerifyAuthentication();

            if (result.IsSuccessful == false)
            {
                TempData["Msg"] = "Login Failed";
                return RedirectToAction("Index", "Home");
            }
            else
            {
                FormsAuthentication.SetAuthCookie(result.UserName, false);
                return RedirectToAction("Index", "Home");
            }
        }
    }
}