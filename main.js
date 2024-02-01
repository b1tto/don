var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/GmZTZCF6/20230817-152937.jpg", "https://i.postimg.cc/k5KRCpwG/20230817-210314.jpg" , "https://i.postimg.cc/B6C8LPrG/20231111-211832.jpg", "https://i.postimg.cc/rmT0wNYJ/20240131-162919.jpg"];
var names = ["Family Book","Shreyan Ghosh", "Samrat Ghosh", "Monalisa Banerjee", "Rayan Ghosh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage =images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
