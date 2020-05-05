import addons from "@storybook/addons";
import { STORY_RENDERED } from "@storybook/core-events";

addons.register("TitleStory", (api) => {
  let interval = null;
  const setTitle = () => {
    let title = "Kardia by Vena";
    clearTimeout(interval);
    let storyData = null;
    try {
      storyData = api.getCurrentStoryData();
    } catch (e) {
      console.error(`Error fetching story data: #${e}`);
    }
    if (storyData) {
      title = `${storyData.kind} | ${storyData.name} | ${title}`;
    }
    if (document.title !== title) {
      document.title = title;
    }
    interval = setTimeout(setTitle, 100);
  };
  setTitle();
  api.on(STORY_RENDERED, setTitle);
});
