import Menu from "./Menu";
function Header(){
return(

<header className="bg-amber-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">CRUD + Auth ReactJs</h1>
           <Menu />
        </div>
      </header>

)
}export default Header;

