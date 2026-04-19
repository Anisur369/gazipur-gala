"use client";
import SkeletonRow from "@/components/skeletons/SkeletonRowSection";
import Link from "next/link";
import { useState, useEffect } from "react";

const GazipurGR = ({apiURL}) => {
  console.log(apiURL)
  const [loading, setLoading] = useState(true);
  const [allCaseData, setAllCaseData] = useState([]);
  const [search, setSearch] = useState({
    caseNumber: "",
    filingDate: "",
    plaintiff: "",
    defendant: "",
    article: "",
    articleDate: "",
  });

useEffect(() => {
   fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      setAllCaseData(data);
      setLoading(false);
    });
}, []);

  const handleSearchChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });    
  };

const filteredData = allCaseData.filter((item) => {
  return (
    item.caseNumber.toLowerCase().includes(search.caseNumber.toLowerCase()) &&
    item.filingDate.includes(search.filingDate) &&
    item.plaintiff.toLowerCase().includes(search.plaintiff.toLowerCase()) &&
    item.defendant.toLowerCase().includes(search.defendant.toLowerCase()) &&
    item.article.toLowerCase().includes(search.article.toLowerCase()) &&
    item.articleDate.some(date => date.includes(search.articleDate))
  );
}).sort((a, b) => {
  // const numA = parseInt(a.caseNumber.split("/")[0]);
  // const numB = parseInt(b.caseNumber.split("/")[0]);
  const [numA, yearA] = a.caseNumber.split("/").map(Number);
  const [numB, yearB] = b.caseNumber.split("/").map(Number);

  if (yearA !== yearB) return yearA - yearB;

  return numA - numB; // ছোট → বড় (ascending)
});

const handleDownload = async (caseItem) => {
  const response = await fetch(caseItem.image);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "case-image.png";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
};

  return (
    <div className="py-2 sm:p-2">
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
        <table className="table table-zebra table-sm">
          <thead className="bg-gray-100 text-gray-800 text-sm uppercase">
            <tr>
              <th>No.</th>
              <th>মামল নং</th>
              <th>ফাইলিং তারিখ</th>
              <th>বাদী</th>
              <th>আসামী</th>
              <th>ধারা</th>
              <th>তারিখ</th>
              <th>মামলা অবস্থা</th>
              {/* <th>আদালত নং</th> */}
              <th>মন্তব্য</th>
              <th className="flex justify-end">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <tr className="">
              <td></td>
              <td className="font-semibold">
                <input
                  type="search"
                  name="caseNumber"
                  onChange={handleSearchChange}
                  placeholder="মামল নম্বর খুঁজুন"
                  className="input input-sm input-bordered w-full rounded-lg"
                />
              </td>
              <td>
                <input
                  type="date"
                  name="filingDate"
                  onChange={handleSearchChange}
                  placeholder="তারিখ খুঁজুন"
                  className="input input-sm input-bordered w-full rounded-lg"
                />
              </td>
              <td className="whitespace-normal">
                <input
                  type="search"
                  name="plaintiff"
                  onChange={handleSearchChange}
                  placeholder="বাদী খুঁজুন"
                  className="input input-sm input-bordered w-full rounded-lg"
                />              
              </td>
              <td className="max-w-xs whitespace-normal">
                <input
                  type="search"
                  name="defendant"
                  onChange={handleSearchChange}
                  placeholder="আসামী খুঁজুন"
                  className="input input-sm input-bordered w-full rounded-lg"
                />
              </td>
              <td className="text-red-600 font-medium">  
                <input
                  type="search"
                  name="article"
                  onChange={handleSearchChange}
                  placeholder="ধারা খুঁজুন"
                  className="input input-sm input-bordered w-full rounded-lg"
                />              
              </td>
              <td>
                <input
                  type="date"
                  name="articleDate"
                  onChange={handleSearchChange}
                  placeholder="তারিখ খুঁজুন" 
                  className="input input-sm input-bordered rounded-lg"
                />
              </td>
              <td></td>
              <td></td>
              {/* 🔥 Action Buttons */}
              <td className="flex gap-2 justify-end">
              </td>
            </tr>


            {loading
            ? Array.from({ length: 16 }).map((_, i) => <SkeletonRow key={i} />)
            :filteredData.length === 0 ? 
              <tr>
                <td colSpan="10" className="text-center py-6 text-red-500 font-semibold">
                  কোনো তথ্য জমা যায়নি (Item not found)
                </td>
              </tr>
            :filteredData.map((caseItem, index) => (
              <tr key={caseItem._id} className="">
                <th className="bg-gray-200">{index + 1}</th>
                <td className="">
                  <div>{caseItem.policeStation}</div>
                  <div><span>{caseItem.caseType}</span> <span>{caseItem.caseNumber}</span></div>
                </td>
                <td>{caseItem.filingDate}</td>
                <td className="">
                  {caseItem.plaintiff}
                </td>
                <td className="">
                  {caseItem.defendant}
                </td>
                <td className="">
                  {caseItem.article}
                </td>
                <td>
                  {caseItem.articleDate.map((date, idx) => (
                    <div key={idx}>{date}</div>
                  ))}
                </td>
                <td>{caseItem.caseStatus}</td>
                {/* <td>{caseItem.courtNo}</td> */}
                <td>{caseItem.note}</td>
                {/* 🔥 Action Buttons */}
                <td className="flex gap-2 flex-col items-center justify-end">
                  <div className="flex gap-2">
                    <Link href={`/allcase/${caseItem._id}`} className="btn btn-xs btn-info text-white w-28">
                      বিস্তারিত দেখুন
                    </Link>

                  </div>

                  <div>
                    {caseItem.image ? (
                      <button onClick={() => handleDownload(caseItem)} className="btn btn-xs btn-success text-white w-28">
                        Download Image
                      </button>
                    ) : null}
                  </div>

                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GazipurGR;