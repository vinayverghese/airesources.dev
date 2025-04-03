interface CategoryItem {
  name: string;
  description: string;
  link: string;
  iconUrl: string;
  previewImage?: string;
  type?: string;
  models?: string[];
}

interface Category {
  title: string;
  description: string;
  categorySlug: string;
  items: CategoryItem[];
}

export const categories: Category[] = [
  {
    title: "IDEs & Code Editors",
    description: "Development environments optimized for AI development",
    categorySlug: "ides",
    items: [
      {
        name: "Trae",
        description:
          "Adaptive AI IDE that transforms how you work, collaborating with you to run faster",
        link: "https://www.trae.ai/",
        iconUrl:
          "https://lf-cdn.trae.ai/obj/trae-ai-us/trae_website_prod/favicon.png",
        type: "editor",
        previewImage: "https://www.trae.ai/preview.png",
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Zed",
        description:
          "Next-generation code editor designed for high-performance collaboration with humans and AI",
        link: "https://zed.dev/",
        iconUrl:
          "https://zed.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_icon.d67dc948.webp&w=64&q=100",
        type: "editor",
        previewImage: "https://zed.dev/preview.png",
        models: ["GPT-4"],
      },
      {
        name: "Cursor",
        description: "AI-powered code editor with built-in AI assistance",
        link: "https://cursor.sh",
        iconUrl: "https://www.cursor.com/favicon.ico",
        type: "editor",
        previewImage: "https://cursor.sh/cursor-hero.png",
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Visual Studio Code",
        description: "Popular code editor with extensive AI extensions",
        link: "https://code.visualstudio.com",
        iconUrl: "https://code.visualstudio.com/favicon.ico",
        type: "editor",
        previewImage:
          "https://code.visualstudio.com/assets/home/home-screenshot-win.png",
        models: ["GPT-4", "Claude 3", "CodeLlama"],
      },
      {
        name: "JetBrains AI Assistant",
        description: "AI coding assistant integrated into JetBrains IDEs",
        link: "https://www.jetbrains.com/ai/",
        iconUrl: "https://www.jetbrains.com/favicon.ico",
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Amazon CodeWhisperer",
        description: "AI-powered code suggestions and security scanning",
        link: "https://aws.amazon.com/codewhisperer/",
        iconUrl: "https://aws.amazon.com/favicon.ico",
        models: ["CodeWhisperer", "CodeWhisperer Pro"],
      },
      {
        name: "Tabnine",
        description: "AI code completion tool supporting multiple languages",
        link: "https://www.tabnine.com",
        iconUrl: "https://www.tabnine.com/favicon.ico",
        models: ["Tabnine Pro", "Tabnine Enterprise"],
      },
      {
        name: "Windsurf IDE",
        description:
          "The first agentic IDE with AI flows and deep contextual awareness",
        link: "https://codeium.com/windsurf",
        iconUrl: "https://codeium.com/favicon.ico",
        type: "editor",
        previewImage: "https://codeium.com/windsurf-hero.png",
        models: ["GPT-4", "Claude 3"],
      },
    ],
  },
  {
    title: "Terminals",
    description: "Modern terminal emulators with AI capabilities",
    categorySlug: "terminals",
    items: [
      {
        name: "Warp",
        description:
          "The intelligent terminal that combines AI and your dev team's knowledge in one fast, intuitive terminal",
        link: "https://www.warp.dev/",
        iconUrl: "https://www.warp.dev/favicon.png",
        type: "terminal",
        previewImage: "https://www.warp.dev/preview.png",
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Wave",
        description:
          "Open-source terminal with superpowers, integrating file previews, file editing, AI, web browsing, and workspace organization",
        link: "https://www.waveterm.dev",
        iconUrl: "https://github.com/wavetermdev/waveterm/blob/main/assets/waveterm-logo-with-bg.png?raw=true",
        type: "terminal",
        previewImage: "https://raw.githubusercontent.com/wavetermdev/waveterm/refs/heads/main/assets/waveterm-logo-with-bg.ico",
        models: ["GPT-4"],
      },
    ],
  },
  {
    title: "Extensions",
    description: "AI-powered extensions and plugins for your favorite editors",
    categorySlug: "extensions",
    items: [
      {
        name: "GitHub Copilot",
        description: "AI pair programmer that works in your editor",
        link: "https://github.com/features/copilot",
        iconUrl: "https://github.com/favicon.ico",
        type: "extension",
        models: ["Codex", "GPT-4"],
      },
      {
        name: "Cline",
        description:
          "Open-source collaborative AI coding agent with frontier model access",
        link: "https://cline.bot",
        iconUrl: "https://cline.bot/assets/icons/favicon-32x32.png",
        type: "extension",
        models: ["GPT-4", "Claude 3", "Gemini Pro"],
      },
      {
        name: "Zencoder AI",
        description: "AI code completion and refactoring assistant",
        link: "https://zencoder.ai",
        iconUrl: "https://zencoder.ai/favicon.ico",
        type: "extension",
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Sourcegraph Cody",
        description: "AI code assistant powered by semantic code search",
        link: "https://about.sourcegraph.com/cody",
        iconUrl: "https://sourcegraph.com/favicon.ico",
        type: "extension",
        models: ["Claude 3", "GPT-4"],
      },
      {
        name: "Supermaven",
        description: "AI code completion assistant",
        link: "https://supermaven.com",
        iconUrl: "https://supermaven.com/favicon-32x32.png",
        type: "extension",
        models: ["GPT-4o", "GPT-4", "Claude 3"],
      },
    ],
  },
  {
    title: "Chat Bots",
    description: "AI-powered chat interfaces and assistants",
    categorySlug: "chat-bots",
    items: [
      {
        name: "ChatGPT",
        description:
          "OpenAI's powerful language model for natural conversations and assistance",
        link: "https://chat.openai.com/",
        iconUrl: "https://chat.openai.com/favicon.ico",
        type: "chat",
        models: ["GPT-4", "GPT-3.5"],
      },
      {
        name: "Claude",
        description:
          "Anthropic's advanced AI assistant with strong analytical and creative capabilities",
        link: "https://claude.ai/",
        iconUrl: "https://claude.ai/favicon.ico",
        type: "chat",
        models: ["Claude 3 Opus", "Claude 3 Sonnet", "Claude 2"],
      },
      {
        name: "Perplexity",
        description:
          "AI-powered search engine that combines real-time information with conversational AI",
        link: "https://www.perplexity.ai/",
        iconUrl: "https://www.perplexity.ai/favicon.ico",
        type: "chat",
        models: ["GPT-4", "Claude 3", "Gemini Pro"],
      },
      {
        name: "Google AI Studio",
        description:
          "Google's platform for experimenting with and building AI applications",
        link: "https://aistudio.google.com/welcome",
        iconUrl: "https://www.gstatic.com/aistudio/ai_studio_favicon_32x32.png",
        type: "chat",
        models: ["Gemini Pro", "Gemini Ultra"],
      },
      {
        name: "TypingMind",
        description:
          "A better UI for ChatGPT with features like chat history, prompt templates, and more",
        link: "https://www.typingmind.com/",
        iconUrl: "https://www.typingmind.com/favicon.ico",
        type: "chat",
        models: ["GPT-4", "GPT-3.5", "Claude 3", "Claude 2"],
      },
      {
        name: "T3 Chat",
        description: "A modern chat interface for interacting with AI models",
        link: "https://t3.chat/chat",
        iconUrl: "https://t3.chat/favicon.ico",
        type: "chat",
        models: ["GPT-4", "Claude 3", "Gemini Pro"],
      },
    ],
  },
  {
    title: "Courses & Learning",
    description: "Educational resources to learn about AI and machine learning",
    categorySlug: "courses",
    items: [
      {
        name: "Fast.ai",
        description: "Practical deep learning for coders",
        link: "https://www.fast.ai",
        iconUrl:
          "https://raw.githubusercontent.com/fastai/logos/refs/heads/main/fastai_small.png",
        models: ["Custom Models", "PyTorch"],
      },
      {
        name: "DeepLearning.AI",
        description: "Comprehensive AI and machine learning courses",
        link: "https://www.deeplearning.ai",
        iconUrl: "https://www.deeplearning.ai/favicon.ico",
        models: ["TensorFlow", "PyTorch", "Keras"],
      },
      {
        name: "Coursera Machine Learning",
        description: "Stanford's machine learning course",
        link: "https://www.coursera.org/learn/machine-learning",
        iconUrl: "https://www.coursera.org/favicon.ico",
        models: ["Octave", "MATLAB"],
      },
      {
        name: "Hugging Face Course",
        description: "Learn about transformers and NLP",
        link: "https://huggingface.co/course",
        iconUrl: "https://huggingface.co/favicon.ico",
        models: ["Transformers", "PyTorch", "TensorFlow"],
      },
      {
        name: "MIT OpenCourseWare",
        description: "Free AI and machine learning courses",
        link: "https://ocw.mit.edu/search/?d=Electrical%20Engineering%20and%20Computer%20Science",
        iconUrl: "https://ocw.mit.edu/favicon.ico",
        models: ["Python", "TensorFlow", "PyTorch"],
      },
      {
        name: "Udacity AI Nanodegree",
        description: "Comprehensive AI program with industry projects",
        link: "https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898",
        iconUrl: "https://www.udacity.com/favicon.ico",
        models: ["TensorFlow", "PyTorch", "Keras"],
      },
      {
        name: "Deep Learning Book",
        description: "The definitive textbook on deep learning",
        link: "https://www.deeplearningbook.org",
        iconUrl: "https://www.deeplearningbook.org/favicon.ico",
        models: ["Theoretical Models", "Mathematical Foundations"],
      },
    ],
  },
  {
    title: "People",
    description: "Influential figures in AI and technology",
    categorySlug: "people",
    items: [
      {
        name: "Simon Willison",
        description:
          "Creator of Datasette, co-creator of Django, and prolific AI experimenter",
        link: "https://x.com/simonw",
        iconUrl:
          "https://pbs.twimg.com/profile_images/378800000261649705/be9cc55e64014e6d7663c50d7cb9fc75_400x400.jpeg",
        type: "person",
      },
      {
        name: "Andrew Ng",
        description:
          "Co-founder of Coursera and DeepLearning.AI, leading AI educator and researcher",
        link: "https://x.com/AndrewYNg",
        iconUrl:
          "https://pbs.twimg.com/profile_images/733174243714682880/oyG30NEH_400x400.jpg",
        type: "person",
      },
      {
        name: "Andrej Karpathy",
        description:
          "Former Director of AI at Tesla, founder of Karpathy.ai, and influential AI researcher",
        link: "https://x.com/karpathy",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg",
        type: "person",
      },
    ],
  },
  {
    title: "Image Generation",
    description: "AI-powered tools for creating and editing images",
    categorySlug: "image-generation",
    items: [
      {
        name: "Midjourney",
        description: "AI-powered image generation from text descriptions",
        link: "https://www.midjourney.com/",
        iconUrl: "https://www.midjourney.com/apple-touch-icon.png",
        type: "image",
        models: ["Midjourney v6", "Midjourney v5"],
      },
      {
        name: "Stable Diffusion",
        description: "Open-source image generation model",
        link: "https://stability.ai/",
        iconUrl: "https://stability.ai/favicon.ico",
        type: "image",
        models: ["SDXL", "SD 2.1", "SD 1.5"],
      },
    ],
  },
  {
    title: "Voice Generation",
    description: "AI-powered tools for text-to-speech and voice synthesis",
    categorySlug: "voice-generation",
    items: [
      {
        name: "ElevenLabs",
        description: "AI voice generation and text-to-speech platform",
        link: "https://elevenlabs.io/",
        iconUrl: "https://elevenlabs.io/favicon.ico",
        type: "audio",
        models: ["Eleven Multilingual v2", "Eleven English v2"],
      },
    ],
  },
  {
    title: "Miscellaneous",
    description: "Various AI tools and resources for different purposes",
    categorySlug: "misc",
    items: [
      {
        name: "Aidbase",
        description:
          "AI-powered support ecosystem for SaaS startups with chatbot, knowledge base, and ticketing",
        link: "https://www.aidbase.ai/",
        iconUrl: "https://www.aidbase.ai/images/favicon.webp",
        type: "support",
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Blog Recorder",
        description:
          "Create blog posts 10x faster by talking out loud, with AI-powered transcription and structuring",
        link: "https://blogrecorder.com/",
        iconUrl: "https://blogrecorder.com/_astro/favicon.3wOwjXYg.ico",
        type: "content",
        models: ["GPT-4", "Whisper"],
      },
    ],
  },
];
