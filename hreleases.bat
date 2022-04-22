@ECHO OFF

CLS

ECHO. SHOWING HEROKU RELEASES...
heroku releases

@REM heroku run bash - one off dyno
@REM heroku releases
@REM heroku releases:info v12
@REM heroku rollback v11