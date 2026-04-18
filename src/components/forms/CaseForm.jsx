"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function CaseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    caseNumber: "",
    caseType: "",
    filingDate: "",
    uploadDate: new Date().toISOString().split("T")[0],
    idLength: 1,
    plaintiff: "",
    defendant: "",
    article: "",
    articleDate: [""],
    policeStation: "",
    caseStatus: "",
    note: "",
    courtNo: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "articleDate") {
      setFormData({ ...formData, articleDate: [value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=b54f153db22576d333c445065d59f4f2`,
      {
        method: "POST",
        body: form,
      }
    );

    const data = await res.json();
    setFormData({ ...formData, image: data.data.url });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const requiredFields = [
      "caseNumber",
      "plaintiff",
      "defendant",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "সবগুলো প্রয়োজনীয় ফিল্ড পূরণ করুন ❗",
          confirmButtonColor: "#3085d6",
        });
        return;
      }
    }

    // if (!formData.image) {
    //   alert("ছবি আপলোড করুন ❗");
    //   return;
    // }


    // alert("✅ Form Submitted Successfully!");
    // post data http://localhost:3000/api/allcases
    fetch("http://localhost:3000/api/allcases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });


    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "মামলা সফলভাবে জমা হয়েছে!",
      confirmButtonColor: "#3085d6",
    });
    router.push("/allcase");

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl space-y-5"
      >
        <h2 className="font-bold text-center text-gray-700">
          <div className="text-2xl flex items-center justify-center gap-2">
            <span>📁</span>
            <span>Case Entry Form</span>
          </div>
          <span>Date: {new Date().toISOString().split("T")[0]}</span>
        </h2>

        <div>
          <label className="label font-medium">মামলা নম্বর *</label>
          <input type="text" name="caseNumber" className="input input-bordered w-full" onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label font-medium">মামলার ধরণ</label>
            <input type="text" name="caseType" className="input input-bordered" onChange={handleChange} />
          </div>
          <div>
            <label className="label font-medium">ফাইলিং তারিখ</label>
            <input type="date" dateFormat="dd/MM/yyyy" name="filingDate" className="input input-bordered w-full" onChange={handleChange} />
          </div>
        </div>

        <div>
          <label className="label font-medium">বাদী পক্ষ*</label>
          <textarea name="plaintiff" className="textarea textarea-bordered w-full" rows={3} onChange={handleChange} />
        </div>

        <div>
          <label className="label font-medium">আসামী পক্ষ *</label>
          <textarea name="defendant" className="textarea textarea-bordered w-full" rows={3} onChange={handleChange} />
        </div>

        <div>
          <label className="label font-medium">ধারা</label>
          <input type="text" name="article" className="input input-bordered w-full" onChange={handleChange} />
        </div>

        <div>
          <label className="label font-medium">ধারার তারিখ</label>
          <input type="date" name="articleDate" className="input input-bordered w-full" onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label font-medium">থানা</label>
            <select name="policeStation" className="select select-bordered" onChange={handleChange}>
              <option value="">Select</option>
              <option value="গাজীপুর সদর">গাজীপুর সদর</option>
              <option value="বাসন">বাসন</option>
              <option value="টঙ্গি পূর্ব">টঙ্গি পূর্ব</option>
              <option value="টঙ্গি পশ্চিম">টঙ্গি পশ্চিম</option>
              <option value="কোনবাড়ি">কোনবাড়ি</option>
              <option value="কাশেমপুর">কাশেমপুর</option>
              <option value="পূবাইল">পূবাইল</option>
              <option value="গাছা">গাছা</option>
              <option value="জয়দেবপুর">জয়দেবপুর</option>
              <option value="শ্রীপুর">শ্রীপুর</option>
              <option value="কাপাসিয়া">কাপাসিয়া</option>
              <option value="কালিয়াকৈর">কালিয়াকৈর</option>
              <option value="কালীগঞ্জ">কালীগঞ্জ</option>
              <option value="যানি না">**-যানি না-**</option>
            </select>
          </div>
          <div>
            <label className="label font-medium">কোর্ট নং</label>
            <input type="text" name="courtNo" className="input input-bordered w-full" onChange={handleChange} />
          </div>
        </div>

        <div>
          <label className="label font-medium">মামলার অবস্থা</label>
          <input type="text" name="caseStatus" className="input input-bordered w-full" onChange={handleChange} />
        </div>

        <div>
          <label className="label font-medium">মন্তব্য</label>
          <textarea name="note" className="textarea textarea-bordered w-full" rows={2} onChange={handleChange} />
        </div>

        <div>
          <label className="label font-medium">ছবি আপলোড</label>
          <input type="file" accept="image/*" className="file-input file-input-bordered w-full" onChange={handleImageUpload} />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-200 cursor-pointer">
          🚀 Submit Case
        </button>
      </form>
    </div>
  );
}
