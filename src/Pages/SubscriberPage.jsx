import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

const SubscriberPage = () => {
  const [allSub, setAllSub] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const arr = [];

    const subscriberRef = ref(db, "AllSubscriber/");
    onValue(subscriberRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({
          id: item.key,           // Firebase key হিসাবে `id` ব্যবহার করছি
          Subscriberemail: item.val().Subscriberemail,  // `Subscriberemail` টি নিয়ে আসা
        });
      });
      setAllSub(arr);
    });
  }, []);

  return (
    <>
    <div className="container">

      {allSub.map((item, index) => (
          <div key={item.id} className="">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 p-5 mb-5 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-gradient-to-r from-orange-600 to-orange-700 px-[15%] ">
            Subscriber Mail {index + 1}: {item.Subscriberemail}
          </h2>
        </div>
      ))}
      </div>
    </>
  );
};

export default SubscriberPage;
