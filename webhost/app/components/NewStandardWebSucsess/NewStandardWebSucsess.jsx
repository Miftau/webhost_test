"use client"

import { Card } from '@/components/ui/card';
import { Award, MailX, MailCheck, Bug } from "lucide-react";

const NewStandardWebSucsess = () => {
     const features = [
    {
      img: "/images/new-s-1.svg",
      description:
        "بفضل شبكة Cloudflare CDN العالمية، يتم تحميل موقعك بسرعة للزوار أينما كانوا في العالم",
    },
    {
      img: "/images/new-s-2.svg",
      description:
       "تم تصميم شبكة Cloudflare لامتصاص هجمات حجب الخدمة الموزعة (DDoS) والتخفيف من أثرها، مما يضمن بقاء موقعك فعالًا حتى أثناء الهجمات المستهدفة.",
    },
  ];
  const features2 = [
    {
        head1: "أداء فائق السرعة",
        head2: "تعزيز السرعة العالمية",
        para1: "تحسين توصيل المحتوى",
        para2: "توزيع التحميل",
        para3: "تقليل وقت الانتقال"
    },
     {
        head1: "أمان لا مثيل له",
        head2: "الحماية من هجمات DDoS",
        para1: "جدار حماية تطبيقات الويب (WAF)",
        para2: "تشفير SSL/TLS",
        para3: "إدارة الروبوتات",
        para4: "Real-time threat intelligence"
    }


  ];

  return (
    <div className='w-full py-16 px-4 sm:px-20 mx-auto'>
        <h1 className='text-center sm:text-3xl text-2xl font-semibold'>Set a new standard for your website success</h1>
        
        <div className="flex flex-col sm:flex-row sm:mt-18">
             <div className='sm:w-2/4'>
                {features2.map((feature, index) => (
                    <div key={index} className='space-y-4 sm:space-y-8'>
                        <h1 className='font-semibold text-xl my-6'>{feature.head1}</h1>
                        <h1 className='pl-6 bg-[#E6FDFD] px-4 inline py-1'>{feature.head2}</h1>
                        <p className='pl-6 text-gray-500 mt-8'>{feature.para1}</p>
                        <p className='pl-6 text-gray-500'>{feature.para2}</p>
                        <p className='pl-6 text-gray-500'>{feature.para3}</p>
                        <p className='pl-6 text-gray-500'>{feature.para4}</p>
                    </div> 
                ))}
            </div>
            <div className="">
            {features.map((feature, index) => (
                <Card
                key={index}
                className="card-hover mt-10 sm:mt-20 flex flex-col items-start p-6 rounded-xl shadow-md"
                >
                <div className="flex items-center justify-center mb-4">
                <img src={feature.img} alt='new-images'/>
                </div>
                <p>{feature.description}</p>
                </Card>
            ))}
            </div>   
        </div>
    </div>
  )
}

export default NewStandardWebSucsess