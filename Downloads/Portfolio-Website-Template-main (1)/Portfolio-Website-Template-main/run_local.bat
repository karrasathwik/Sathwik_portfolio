@echo off
REM Start a local Python HTTP server and open the site in Chrome
cd /d "%~dp0"
start "Local Server" cmd /k python -m http.server 8000
timeout /t 2 /nobreak > nul
where chrome >nul 2>&1
if %errorlevel%==0 (
    start "" chrome "http://localhost:8000/index.html"
) else (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "http://localhost:8000/index.html"
)
