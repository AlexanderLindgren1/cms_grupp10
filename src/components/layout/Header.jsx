
import Link from "next/link";
import "../styles/style.css";
import Image from "next/image";
export default function Header({ blok }) {
  console.log(blok);

  return (
    <section className="header">
      <nav>
        <p className="logo">Ecommerce</p>
 
        {blok.links.map((linkstory) => {
          const story = linkstory?.link?.story;
          //         const story = linkstory.link.story; // Remove the async/await usage
console.log("storyxx",story);

          return (
            <Link key={story.uuid} href={`/${story.slug}`}>
              <p className="nav-links">{story.name}</p>
            </Link>
          );
        })}
        <form className="search-form">
        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPRJREFUSEu1lAEOwiAMRdnJ1JOpJ9ObqS/hLw2WAhuQmOFG/vttabe0eG2L9VMEuKaU+F2yCfbPvH/0GqsBELg3RIA1QR7Air+Na/YSFLwJKQFW/PZLEaLesudCSAn4ZLWms1yfVz5fNWMBctUjrqgAqPhuPc4CEAdCKonib1mA0jPSG0MAhRsV1zMZGrNujwBUt64UNQ879psXw0agfKLTkybbC9W6RY0WXVdrZqjRcF92qd4hymJMaM//av75eHbYMWmBdRW5NnPkWm55khbNKd0+FzLSVNH0rkJmAYC7c2kmAIjqsUc7GxAOuyjHh78tj+ALspM/GVK5SjgAAAAASUVORK5CYII=" 
       
        alt="header icon"
          width={768}
          height={768} 
          layout="responsive" />
          <input type="text" placeholder={blok.searchbox[0].searchbox} />
        </form>
      </nav>
    </section>
  );
}
