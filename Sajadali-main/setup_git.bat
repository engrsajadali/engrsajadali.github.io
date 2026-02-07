@echo off
echo Setting up Git repository for Sajad Ali Portfolio...

:: Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not found in your PATH.
    echo Please install Git from https://git-scm.com/download/win and restart your terminal.
    pause
    exit /b 1
)

:: Initialize Git
echo.
echo [1/3] Initializing git...
git init

:: Add files
echo.
echo [2/3] Adding files to staging...
git add .

:: Commit
echo.
echo [3/3] Committing files...
git commit -m "Initial commit: Restored Sajad Ali Portfolio"

echo.
echo [SUCCESS] Git repository initialized and committed!
echo.
echo Next steps:
echo 1. Create a repository on GitHub (https://github.com/new)
echo 2. Run the commands shown by GitHub, looks like:
echo    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
echo    git push -u origin main
echo.
pause
