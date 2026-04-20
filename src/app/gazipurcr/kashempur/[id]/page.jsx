"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; // ✅ ADD THIS
import Swal from "sweetalert2";
import CaseDetailsSkeleton from "@/components/skeletons/CaseDetailsSkeleton";
const apiURL=process.env.NEXT_PUBLIC_apiKashempurCR;

export default function CaseDetailsCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const params = useParams(); // ✅ এখান থেকে params নাও
  const id = params?.id;
  const router=useRouter(); // ✅ router add
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null); // better null

  useEffect(() => {
    if (!id) return;

    fetch(`${apiURL}/${id}`)
      .then(res => res.json())
      .then(singleData => {
        setData(singleData);
        setFormData(singleData);
        setLoading(false);
      });
  }, [id]); // ✅ dependency add

  const handlePrint = () => {
    window.print();
  };


  

  const handleDeleteCase = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No",
  });

  // যদি user Yes দেয়
  if (result.isConfirmed) {
    const res = await fetch(`${apiURL}/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Case deleted successfully.",
      });
      router.push("/allcase");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to delete case.",
      });
    }
  }
};



  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // if(name === "articleDate") {
    //   const updatedDates = formData.articleDate ? [...formData.articleDate] : [];
    //   updatedDates.push(value);
    //   setFormData(prev => ({
    //     ...prev,
    //     articleDate: updatedDates
    //   }));
    // } else {
    //   setFormData(prev => ({
    //     ...prev,
    //     [name]: value
    //   }));
    // }
  };

  const handleDateChange = (e, index) => {
    const updatedDates = [...formData.articleDate];
    updatedDates[index] = e.target.value;

    setFormData(prev => ({
      ...prev,
      articleDate: updatedDates
    }));
  };

  const handleAddDate = (value) => {
    if (!value) return;

    setFormData(prev => ({
      ...prev,
      articleDate: [...(prev.articleDate || []), value]
    }));
  };

const handleDeleteDate = (index) => {
  const updatedDates = formData.articleDate.filter((_, i) => i !== index);

  setFormData(prev => ({
    ...prev,
    articleDate: updatedDates
  }));
};


  const handleUpdate = async () => {
    const res = await fetch(`${apiURL}/${id}`, {
      method: "PUT", // or PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const updated = await res.json();
    setData(updated);
    setIsEditing(false);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Case updated successfully.",
      confirmButtonColor: "#3085d6",
    });
  };
  if (loading) return <CaseDetailsSkeleton />;
  if (!data) return <CaseDetailsSkeleton />; // ✅ loading handle

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link href="/allcase" className="text-white mb-4 inline-block border border-blue-200 px-3 py-1 rounded-lg bg-green-600 hover:bg-blue-200 transition text-center items-center">
        &larr; Back to All Cases
      </Link>
      <div className="bg-white shadow-xl rounded-2xl p-6 border">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">মামলার সম্পর্কে বিস্তারিত তথ্য</h2>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm border border-blue-600">
            {isEditing ? (
              <input
                name="caseStatus"
                value={formData.caseStatus || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.caseStatus || "No Status"
            )}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p>
            <strong>মামলা নম্বর:</strong>{" "}
            {isEditing ? (
              <input
                name="caseNumber"
                value={formData.caseNumber || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.caseNumber
            )}
          </p>
          <p>
            <strong>কেস টাইপ:</strong>{" "}
            {isEditing ? (
              <input
                name="caseType"
                value={formData.caseType || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.caseType
            )}
          </p>
          <p>
            <strong>ফাইলিং তারিখ:</strong>{" "}
            {isEditing ? (
              <input
                name="filingDate"
                type="date"
                value={formData.filingDate || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.filingDate
            )}
          </p>
          {/* <p>
            <strong>আপলোড তারিখ:</strong>{" "}
            {isEditing ? (
              <input
                name="uploadDate"
                value={formData.uploadDate || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.uploadDate
            )}
          </p> */}
          <p>
            <strong>কোর্ট নং:</strong>{" "}
            {isEditing ? (
              <input
                name="courtNo"
                value={formData.courtNo || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.courtNo
            )}
          </p>
          <p>
            <strong>থানা:</strong>{" "}
            {isEditing ? (
              <input
                name="policeStation"
                value={formData.policeStation || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.policeStation
            )}
          </p>
        </div>

        <div className="mt-4 space-y-3 text-sm">
          <p>
            <strong>বাদী:</strong>{" "}
            {isEditing ? (
              <textarea
                name="plaintiff"
                value={formData.plaintiff || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              data.plaintiff
            )}
          </p>
          <p>
            <strong>বিবাদী:</strong>{" "}
            {isEditing ? (
              <textarea
                name="defendant"
                value={formData.defendant || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              data.defendant
            )}
          </p>
          <p>
            <strong>ধারা:</strong>{" "}
            {isEditing ? (
              <textarea
                name="article"
                value={formData.article || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              data.article
            )}
          </p>
          <p>
            <strong>মামলার তারিখসমূহ:</strong>{" "}
            {isEditing ? (
              <span className="flex">
                {/* {data.articleDate.map((date, index) => (
                  <input
                    key={index}
                    name="articleDate"
                    value={date}
                    type="date"
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ))} */}
<span>
{formData.articleDate?.map((date, index) => (
  <div key={index} className="flex items-center gap-2 mb-2">
    <input
      value={date}
      type="date"
      onChange={(e) => handleDateChange(e, index)}
      className="border px-2 py-1 rounded"
    />

    <button
      onClick={() => handleDeleteDate(index)}
      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition cursor-pointer"
    >
      ✕
    </button>
  </div>
))}

</span>


                <span className="mx-2">or</span>



<input
  type="date"
  onChange={(e) => handleAddDate(e.target.value)}
  className="border px-2 py-1 rounded mt-2 h-6"
/>






                {/* <input
                  name="newArticleDate"
                  value=""
                  type="date"
                  onChange={handleChange}
                  className="border px-2 py-1 rounded mt-2"
                  placeholder="Add new date"
                /> */}
              </span>
            ) : (
              Array.isArray(data.articleDate)
                ? data.articleDate.map((d, i) => (
                    <span key={i}>{d}{i !== data.articleDate.length - 1 && ", "}</span>
                  ))
                : data.articleDate
            )}
          </p>
          <p>
            <strong>মন্তব্য:</strong>{""}
            {isEditing ? (
              <textarea
                name="note"
                value={formData.note || ""}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              data.note
            )}
          </p>
        </div>

        <div className="flex gap-3 mt-6 print:hidden">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-red-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-red-700"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg cursor-pointer hover:bg-red-700"
              >
                Edit
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-red-700"
              >
                Print
              </button>
              <button onClick={handleDeleteCase} className="px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700">
                Delete
              </button>
            </>
          )}
        </div>


      </div>
    </div>
  );
}