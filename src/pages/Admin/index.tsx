import { useState, type FC } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import { WEB_APP_URL } from "../../router/types";
import PageLoader from "../../components/PageLoader";

const Admin: FC = () => {

    const [files, setFiles] = useState<any[]>([]);
    const [uploading, setUploading] = useState(false);

    const { role } = useParams();

    const handleUpload = async (file: File) => {
        setUploading(true);

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64 = (reader.result as string).split(",")[1];
            const res = await fetch(WEB_APP_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    file: base64,
                    name: file.name,
                    mimeType: file.type,
                }),
            });

            const data = await res.json();
            if (data.success) {
                setFiles((prev) => [data, ...prev]);
            } else {
                alert("Upload failed: " + data.error);
            }

            setUploading(false);
        };

        reader.readAsDataURL(file);
    };

    if (role !== "admin") {
        return <NotFound />
    }

    if (uploading) return <PageLoader />

    return (
        <div className="flex">
            <input
                type="file"
                accept="image/*,video/*"
                onChange={(e) => e.target.files && handleUpload(e.target.files[0])}
                className="border p-2 rounded"
            />
            {files.map((img, index) => (
                <div
                    key={index}
                    className={`overflow-hidden rounded-xl shadow-md`}
                >
                    <img
                        src={`https://driver-proxy-tau.vercel.app/api/drive-proxy?fileId=${img.id}`}
                        alt={img.name}
                        className="w-full h-full object-cover rounded-xl hover:opacity-90 transition-all duration-200"
                    />
                </div>
            ))}

        </div>
    )
}

export default Admin