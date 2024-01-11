import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Snaky Bot",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1191767048401997864&permissions=8&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "Easy to use",
      description:
        "Easy to setup and play with it!.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "Snaky is ready forever!",
      description:
        "Snaky is hosted forever.It only goes offline when we are updating new cool stuffs!",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "We accept!",
      description:
        "We accept all your idea and any bug reports!",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Fun and Crazy!",
      description:
        "Our snake game can handle multiple round!",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 3, //-  - Your
  memberCount: 20, //--   - Bot
  executedCommand: 100, //--  - Stats
  availableCommand: 6, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/sunshinghin",
  twitterLink: "https://twitter.com",
  mediumLink: "https://medium.com/",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.com/invite/GPRwYfYH6Y",
  youtubeLink: "https://m.youtube.com/channel/UCgjlFRQ6hUSWcZNyP2TRR-w",
};

export default config;
