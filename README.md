# Namaste_React :

#Parcel
-dev build
-hoisting local server
-HMR->hot module replacement
-File watching algorithm  written in c++
-catching -faster builds
-image optimization
-minification
-bundle
-compress

#App structure-----------
/*
//header-
      logo,
      links
//body-
      saerch,     
      Rest container,
       rest cards container-img,
        name, 
        ratings,
        cuisine, 
        time for delviery.
//footer-
      copyright, 
      link,  
      address,
      contact
      */

#export
//there are two types of export/import------

//1-by default export
{
export default <name of variable>;
} after this import
import component from "file-path";

//2-named export{ 
      export const component="---";
}
after this import
import {component} from "file-path";