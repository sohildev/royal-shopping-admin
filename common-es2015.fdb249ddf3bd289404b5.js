(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6uu6":function(t,s,r){"use strict";r.d(s,"a",(function(){return e}));var o=r("AytR");class e{constructor(t){this.http=t,this.API_URL=o.a.APIEndpoint}checkResetPasswordToken(t){return this.http.get(`${this.API_URL}/reset-password/${t}`)}login(t){return this.http.post(`${this.API_URL}/login`,t)}register(t){return this.http.post(`${this.API_URL}/register`,t)}forgotPassword(t){return this.http.post(`${this.API_URL}/forgot-password`,t)}resetPassword(t,s){return this.http.post(`${this.API_URL}/reset-password/${t}`,s)}changePassword(t){return this.http.post(`${this.API_URL}/change-password`,t)}editProfile(t){return this.http.post(`${this.API_URL}/profile`,t)}phonelogin(t){return this.http.post(`${this.API_URL}/phone-login`,t)}otpverify(t){return this.http.post(`${this.API_URL}/otp-verify`,t)}resendotp(t){return this.http.post(`${this.API_URL}/otp-resend`,t)}}}}]);