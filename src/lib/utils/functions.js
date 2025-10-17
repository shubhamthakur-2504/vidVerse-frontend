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

        if (res.status !== 200) {
            const errorBody= await res.text();
            console.log("Native fetch failed", errorBody);
            return {error: errorBody, status: res.status};
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
            throw new Error("Failed to fetch route (client) ", pathName);
        }
    } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${pathName}`, {
            cache: "no-store",
            credentials: "include",
        });

        if (!res.ok) {
            const errorBody= await res.text();
            console.error("Native fetch failed", res.status);
            return {error: errorBody, status: res.status};
        }

        const json = await res.json();
        return json.data;
    }
}

async function gernalPost(pathName, data=null) {
    if (data) {
        try {
            const res = await apiClient.post(pathName, data);
            return res.data.data;
        } catch (error) {
            console.error("Axios post failed", error);
            const errorBody= await res.text()
            return {error: errorBody, status: res.status};
        }
    }else{
        try {
            const res = await apiClient.post(pathName);
            return res.data.data;
        } catch (error) {
            console.error("Axios post failed", error);
            const errorBody= await res.text()
            return {error: errorBody, status: res.status};
        }
    }
}

async function gernalDelete(pathName, data=null) {
    if (data) {
        try {
            const res = await apiClient.delete(pathName, data);
            return res.data.data;
        } catch (error) {
            console.error("Axios delete failed", error);
            const errorBody= await res.text()
            return {error: errorBody, status: res.status};
        }
    }else{
        try {
            const res = await apiClient.delete(pathName);
            return res.data.data;
        } catch (error) {
            console.error("Axios delete failed", error);
            const errorBody= await res.text()
            return {error: errorBody, status: res.status};
        }
    }
}

export { fetchVideos, gernalFetch, gernalPost, gernalDelete };
