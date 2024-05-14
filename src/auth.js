export const useRequireAuth = () => {
    const userData = sessionStorage.getItem("dataSuccess");
    return !!userData;
};