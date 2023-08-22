export const prerender = true;

export const load = ({ params }) => {
    return {
        id: params.id
    }
}