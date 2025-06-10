// Next element
import Image from "next/image";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Style
import "./InstagramFeed.scss";

// Type
type InstagramFeedProps = {
  paddingTopVersion: string;
};

const instagramPosts = [
  {
    id: 1,
    image: "",
  },
  {
    id: 2,
    image: "",
  },
  {
    id: 3,
    image: "",
  },
  {
    id: 4,
    image: "",
  },
];

function InstagramFeed({ paddingTopVersion }: InstagramFeedProps) {
  return (
    <section className={`instagram-feed ${paddingTopVersion}`}>
      <SectionTitle
        title="Suivez nos aventures"
        colorVersion="section-title--version-with-orange-color"
        versionWithTextAlign="section-title--version-with-text-align"
      />
      <div className="instagram-feed__grid">
        {instagramPosts.map((post) => (
          <div key={post.id} className="instagram-feed__item">
            <Image
              src={post.image}
              alt={`Instagram post ${post.id}`}
              className="instagram-feed__image"
            />
          </div>
        ))}
      </div>

      <Button
        text="@LECLUBDESFAMILLES"
        link=""
        marginAutoVersion="button--center-version"
        marginTopVersion=""
      />
    </section>
  );
}

export default InstagramFeed;
