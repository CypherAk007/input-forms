# input-forms
git init
git add .
git commit -m "Add existing project files to Git"
git remote add origin https://github.com/cameronmcnz/example-website.git
git push -u -f origin master


If the problem is "main and master are entirely different commit histories.", the following will work

git checkout master   
git branch main master -f    
git checkout main  
git push origin main -f 
