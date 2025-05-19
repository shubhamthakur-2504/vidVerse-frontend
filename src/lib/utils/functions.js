import apiClient from "@lib/axios/api";

async function fetchVideos(pathName, client = false) {
    if (client) {
        try {
            const res = await apiClient.get(pathName);
            return res.data.data;
        } catch (error) {
            console.error("Axios fetch failed", error);
            throw new Error("Failed to fetch videos (client)");
        }
    } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${pathName}`, {
            cache: "no-store",
            credentials: "include",
        });

        if (!res.ok) {
            console.error("Native fetch failed", res.status);
            throw new Error("Failed to fetch videos (server)");
        }

        const json = await res.json();
        return json.data;
    }
}

export { fetchVideos };
