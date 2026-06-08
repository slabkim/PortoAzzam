export interface Project {
  slug: string;
  title: string;
  tag?: string;
  category: "Video Editing" | "Photography" | "Graphic Design";
  desc: string;
  longDescription: string;
  techStack: string[];
  role: string;
  period: string;
  responsibilities: string[];
  link: string;
  image: string;
  youtubeId?: string;
  achievement?: string;
}

export const projects: Project[] = [
  {
    slug: "branded-content",
    title: "Influencer Endorsement & Branded Content",
    tag: "Zam Studio Work",
    category: "Video Editing",
    desc: "Collaborated with 10+ national brands and partnered with influencers such as Alphi Sugoi and Vidya Susanti (vsbvi) to edit high-impact marketing videos.",
    longDescription: "Served as the Lead Editor and Designer for viral branded content campaigns across YouTube and TikTok, collaborating with over 10 national brands including Sukro and Lemonilo. Partnered directly with top influencers like Alphi Sugoi and Vidya Susanti (vsbvi) to deliver platform-optimized videos and visual designs that maximize audience engagement and drive brand awareness.",
    techStack: ["Adobe Premiere Pro", "Photoshop", "Corel Draw", "Adobe Illustrator", "Canva", "CapCut PC"],
    role: "Lead Editor & Designer (Zam Studio)",
    period: "Ongoing",
    responsibilities: [
      "Executed end-to-end video editing for TikTok and YouTube, optimizing pacing, hooks, and storytelling to maximize viral potential.",
      "Created high-impact graphic design assets and visual elements tailored to each national brand's identity.",
      "Collaborated directly with top creators and brands to ensure final deliverables aligned with campaign goals and guidelines."
    ],
    link: "https://www.tiktok.com/@vsbvix",
    image: "/assets/Foto fotonya/Work/Zam studio/ZAM STUDIO.jpg"
  },
  {
    slug: "jegeg-bagus-photo",
    title: "Jegeg Bagus Sosiologi Photo Project",
    category: "Photography",
    desc: "Directed outdoor photography sessions for the Jegeg Bagus Sosiologi pageant representatives at Udayana University.",
    longDescription: "Directed outdoor photography sessions for the Jegeg Bagus Sosiologi pageant representatives at Udayana University. Focused on utilizing natural light to capture high-end editorial portraits that effectively highlight the candidates' personalities for official social promotions.",
    techStack: ["Lightroom Classic", "Adobe Photoshop", "DSLR Camera"],
    role: "Lead Photographer & Editor",
    period: "September 2024",
    responsibilities: [
      "Designed the visual concept, color palette, and moodboard for the outdoor portrait sessions.",
      "Conducted professional retouching, color grading, and asset preparation for social media publication."
    ],
    link: "https://www.instagram.com/p/DLCqwrqRQj-/",
    image: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0259.jpg"
  },
  {
    slug: "ugm-jersey",
    title: "UKM Tenis Meja UGM Jersey Design",
    category: "Graphic Design",
    desc: "Designed the official custom jersey apparel for the Table Tennis Club of Universitas Gadjah Mada.",
    longDescription: "Spearheaded the jersey design for UGM's Table Tennis Club for the 2023 season. Successfully blended cultural heritage with contemporary athletic apparel by transforming traditional batik patterns into a dynamic geometric layout, delivering a premium look for competitive university matches.",
    techStack: ["Adobe Illustrator", "Photoshop", "Vector Mockups"],
    role: "Graphic Designer",
    period: "July 2023",
    responsibilities: [
      "Conceptualized the apparel layout and pattern designs from client specifications.",
      "Produced print-ready vector source files ensuring color accuracy (CMYK) for dye-sublimation manufacturing.",
      "Created high-fidelity mockups (front and back views) for social media announcements and team approval."
    ],
    link: "https://www.instagram.com/p/Cu5VTR0yFDL/",
    image: "/assets/Foto fotonya/tenisMeja/3.jpg"
  },
  {
    slug: "podcast-production",
    title: "Podcast Intro & Production",
    category: "Video Editing",
    desc: "Crafted custom audio-visual intro scenes and edited cuts for academic talk shows and podcasts.",
    longDescription: "Produced audio-visual assets and handled post-production for various podcast formats and talk shows. Created custom, energetic intro/outro animations, managed multicam alignment, and balanced audio profiles to ensure a highly engaging viewer experience suitable for YouTube and Spotify.",
    techStack: ["Adobe Premiere Pro", "Photoshop"],
    role: "Video Editor & Motion Designer",
    period: "2026",
    responsibilities: [
      "Integrated and customized modern intro/outro sequences with motion titles using curated design assets.",
      "Synchronized multiple audio inputs and camera angles to construct a clean, continuous talk-show flow.",
      "Optimized voice tracks (de-noise, EQ, compression) for clean broadcast-quality speech."
    ],
    link: "https://youtu.be/7K2JDLSDo_c?si=GyWgz5h6H-mwnJOx",
    image: "/assets/Foto fotonya/Work/Zam studio/podcast_thumb.jpg",
    youtubeId: "7K2JDLSDo_c"
  },
  {
    slug: "youtube-gaming-editor",
    title: "YouTube Gaming Editor — Bang Alphi",
    category: "Video Editing",
    desc: "Produced gaming content for influencer platforms with custom overlay structures and engaging post-production.",
    longDescription: "Served as a dedicated YouTube video editor for the gaming creator 'Bang Alphi'. Specialized in fast-paced, high-retention video editing with integrated sound effects, custom face-cam frames, and pop-culture meme insertions to maintain high audience engagement throughout the gameplay series.",
    techStack: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    role: "YouTube Video Editor",
    period: "2023–2024",
    responsibilities: [
      "Paced video edits to match game action spikes and punchlines.",
      "Designed custom screen overlays, motion subtitles, and transition cards.",
      "Created highly clickable, high-contrast YouTube thumbnails with localized text hooks."
    ],
    link: "https://youtu.be/-2wqKvGwXmU?si=MH9yV3xkvgoZRxsR",
    image: "/assets/Foto fotonya/Work/Zam studio/gaming_thumb.jpg",
    youtubeId: "-2wqKvGwXmU"
  },
  {
    slug: "instagram-sosial-camping",
    title: "Instagram Sosial Camping Ton 8",
    category: "Graphic Design",
    desc: "Managed the complete visual identity and social media ecosystem for the 'Sosial Camping Ton 8' academic social outreach project.",
    longDescription: "Managed the complete visual identity and social media ecosystem for the 'Sosial Camping Ton 8' academic social outreach project. Conceptualized the visual theme from scratch, designed the official project logo, and produced a dynamic logo intro using Adobe After Effects to elevate the group's digital campaign presentation.",
    techStack: ["Adobe Premiere Pro", "After Effects", "Canva", "CapCut"],
    role: "Social Media Designer & Creative Director",
    period: "2024",
    responsibilities: [
      "Conceptualized and designed the official logo for the social project, establishing a cohesive theme, color palette, and visual guidelines for the campaign.",
      "Developed a professional video entrance intro for the logo using Adobe After Effects to enhance the project's video content and group presentation.",
      "Engineered creative social media graphics and curated aesthetic layouts to ensure an engaging grid structure that effectively communicates the social project's goals."
    ],
    link: "https://www.instagram.com/a3suryaa?igsh=MWVuNTVhYTF1a3Nt",
    image: "/assets/Foto fotonya/Work/ton 8/ton 8.png"
  },
  {
    slug: "instagram-smart-tech",
    title: "Instagram Smart Tech Academy",
    category: "Graphic Design",
    desc: "Spearheaded the social media operations and creative direction for Smart Tech Academy's Instagram platform.",
    longDescription: "Spearheaded the social media operations and creative direction for Smart Tech Academy's Instagram platform. Executed a monthly visual overhaul of the feed design to keep the branding fresh, alongside maintaining a rigorous daily content schedule aimed at broadcasting real-time learning updates to parents.",
    techStack: ["Adobe Illustrator", "Adobe Photoshop", "Content Strategy", "Educational Curation"],
    role: "Social Media Specialist & Graphic Designer",
    period: "2023–2024",
    responsibilities: [
      "Revamped and adapted the overall feed design templates every month to maintain a modern, engaging, and innovative aesthetic.",
      "Curated and scheduled daily educational updates regarding student progress, ensuring high transparency and strengthening trust with parents.",
      "Transformed complex academy learning models into clear, interactive, and visually digestible informational graphics."
    ],
    link: "https://www.instagram.com/smart.techacademy1?igsh=azBiOG00c2N4aHky",
    image: "/assets/Foto fotonya/Work/smartTech/smartTech.PNG"
  },
  {
    slug: "branded-kanzler",
    title: "Sosis Kanzler — Branded Content",
    category: "Video Editing",
    desc: "Produced a KOL-endorsed food video for Sosis Kanzler, following the brand brief while preserving the creator's natural persona and storytelling style.",
    longDescription: "Edited a branded endorsement video for Sosis Kanzler in collaboration with influencer Vidya Susanti (@vsbvix). The video was produced in full compliance with the brand brief — adapting product messaging to fit the KOL's casual, relatable content style, ensuring authentic delivery without compromising brand standards.",
    techStack: ["CapCut", "Adobe Premiere Pro"],
    role: "Video Editor (Zam Studio)",
    period: "Ongoing",
    responsibilities: [
      "Followed the brand briefing closely to align video pacing, tone, and messaging with Sosis Kanzler's campaign objectives.",
      "Adapted the brand script to fit the KOL's natural persona, keeping the content feel organic and unforced.",
      "Applied food-focused color grading and sound design to enhance product appeal and audience retention."
    ],
    link: "https://vt.tiktok.com/ZSQj5y5j9/",
    image: "/assets/Foto fotonya/Work/branded_content/kanzler.jpg"
  },
  {
    slug: "branded-garuda",
    title: "Garuda Snack — Branded Content",
    category: "Video Editing",
    desc: "Created a high-retention branded video for Garuda Snack, matching the KOL's casual persona with the brand's fun and energetic identity.",
    longDescription: "Produced a short-form endorsement video for Garuda Snack collaborating with creator Vidya Susanti (@vsbvix). Followed the brand brief strictly while adapting the content to the KOL's established content style — creating a seamless integration between brand messaging and the creator's audience relationship.",
    techStack: ["CapCut", "Adobe Premiere Pro"],
    role: "Video Editor (Zam Studio)",
    period: "Ongoing",
    responsibilities: [
      "Executed the brand briefing to ensure product visibility, key message delivery, and CTA placement align with Garuda's campaign goals.",
      "Maintained the KOL's authentic tone and persona throughout the video to maximize audience trust and engagement.",
      "Optimized cuts and transitions for TikTok's short-form algorithm to drive high completion rates."
    ],
    link: "https://vt.tiktok.com/ZSQj5F54M/",
    image: "/assets/Foto fotonya/Work/branded_content/garuda.jpg"
  },
  {
    slug: "branded-lemonilo",
    title: "Lemonilo — Branded Content",
    category: "Video Editing",
    desc: "Edited a lifestyle-style branded video for Lemonilo, integrating product benefits naturally into the KOL's daily routine narrative.",
    longDescription: "Edited a food-lifestyle branded video for Lemonilo featuring influencer Vidya Susanti. The video required a delicate balance — communicating Lemonilo's healthy product angle while keeping the creator's warm, conversational content style intact. The result is a video that feels genuine rather than promotional.",
    techStack: ["CapCut", "Adobe Premiere Pro"],
    role: "Video Editor (Zam Studio)",
    period: "Ongoing",
    responsibilities: [
      "Interpreted the brand brief to highlight Lemonilo's product USP (healthier choice) while embedding it naturally in the KOL's storytelling.",
      "Synced audio cues, product shots, and transitions to maintain high viewer retention in the first 3 seconds.",
      "Delivered edit revisions aligned with the brand team's feedback while preserving the KOL's audience connection."
    ],
    link: "https://vt.tiktok.com/ZSQj5FAxA/",
    image: "/assets/Foto fotonya/Work/branded_content/lemonilo.jpg"
  },
  {
    slug: "branded-theface",
    title: "The Face Indo — Branded Content",
    category: "Video Editing",
    desc: "Produced a beauty-product branded video for The Face Indonesia, blending skincare storytelling with the KOL's authentic review persona.",
    longDescription: "Edited a skincare endorsement video for The Face Indonesia with creator Vidya Susanti. The brief required clear product demonstration (sunscreen) while maintaining the KOL's energetic and humorous review style. The final video successfully communicates product efficacy while driving entertainment value that resonates with the target audience.",
    techStack: ["CapCut", "Adobe Premiere Pro"],
    role: "Video Editor (Zam Studio)",
    period: "Ongoing",
    responsibilities: [
      "Followed The Face Indonesia's brand brief precisely — ensuring product features, BPOM certification highlights, and CTA were clearly conveyed.",
      "Adapted the edit to match the KOL's fast-paced, expressive review style for maximum viewer engagement.",
      "Applied beauty-specific color grading and soft skin tones to complement the skincare product narrative."
    ],
    link: "https://vt.tiktok.com/ZSQj5Py8V/",
    image: "/assets/Foto fotonya/Work/branded_content/theface.jpg"
  },
  {
    slug: "branded-kilala",
    title: "Kilala Softlens — Branded Content",
    category: "Video Editing",
    desc: "Edited a lifestyle endorsement for Kilala Softlens, naturally showcasing the product within the KOL's everyday content format.",
    longDescription: "Produced a short-form branded video for Kilala Softlens Indonesia in collaboration with Vidya Susanti. The brief focused on lifestyle integration — showing how the softlens fits naturally into the creator's daily life rather than a hard-sell approach. The video leverages the KOL's relatability to build genuine interest and trust for the product.",
    techStack: ["CapCut", "Adobe Premiere Pro"],
    role: "Video Editor (Zam Studio)",
    period: "Ongoing",
    responsibilities: [
      "Translated the Kilala Softlens brand brief into a soft-sell lifestyle narrative that resonates with the KOL's beauty-conscious audience.",
      "Maintained the creator's natural persona and delivery style throughout, making the brand integration feel organic.",
      "Optimized thumbnails, text overlays, and hook sequences for maximum TikTok discoverability and engagement."
    ],
    link: "https://vt.tiktok.com/ZSQj5nkge/",
    image: "/assets/Foto fotonya/Work/branded_content/kilala.jpg"
  }
];