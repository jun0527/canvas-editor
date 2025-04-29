import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTemplateModuleStore = defineStore("templateModule", () => {
  const element = ref(null);
  const setElement = (payload) => {
    element.value = payload;
  };

  return { element, setElement };
});
