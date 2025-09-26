import apiClient from "@lib/axios/api";

async function fetchVideos(pathName, client = false, cookieStore = null) {
    if (client) {
        try {
            const res = await apiClient.get(pathName);
            return res.data.data;
        } catch (error) {
            console.log("Axios fetch failed", error);
            throw new Error("Failed to fetch videos (client)");
        }
    } else {
        const fetchHeaders = new Headers();

        // 4. Construct the Cookie header from the passed cookieStore
        if (cookieStore) {
            const cookieString = cookieStore.getAll().map(cookie => 
                `${cookie.name}=${cookie.value}`
            ).join('; ');
            fetchHeaders.set('Cookie', cookieString);
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${pathName}`, {
            cache: "no-store",
            headers: fetchHeaders,
            credentials: "include",
        });

        if (!res.ok) {
            const errorBody= await res.text();
            console.log("Native fetch failed", errorBody);
            throw new Error("Failed to fetch videos (server)");
        }

        const json = await res.json();
        return json.data;
    }
}
async function gernalFetch(pathName, client = false) {
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

export { fetchVideos, gernalFetch };
