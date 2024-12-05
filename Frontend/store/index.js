export const state = () => ({
    theme: 'light-mode',
});
    
export const mutations = {
    setTheme(state, theme) {
    state.theme = theme;
    },
};
