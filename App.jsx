  import SideBar from "./components/layout/SideBar"
  import ForYou from "./ForYou"
  import WhatsHappening from "./WhatsHappening"
  import Posts from "./components/posts/Posts"
  import Search from "./components/layout/Search"
  import Trending from "./components/layout/Trending"
  import WhoToFollow from "./components/layout/WhoToFollow"
  import BorderLine from "./components/layout/BorderLine"

  function App() {


    return (
      <>
        <div className="flex md:container mx-auto">
          <div class="first w-16 md:w-[70%]">
            <SideBar />
          </div>
          <div className="second w-full border-[1px] border-x-white border-y-black">
            <ForYou />
            <BorderLine />
            <WhatsHappening />
            <BorderLine />
            <Posts />
          </div>
          <div className="third w-full hidden md:block ">
            <Search />
            <Trending />
            <WhoToFollow />
          </div>
        </div>
      </>
    )
  }

  export default App
