1. What are some differences between interfaces and types in TypeScript?

interface:

TypeScript এ interface হলো একটি কাঠামো যা কোনো object এর ধরন নির্ধারণ করে।
object এ কোন কোন property থাকবে, তাদের type কী হবে সেটা interface দিয়ে define করা হয়।


Interface দিয়ে কাঠামো নির্ধারণ

interface Student {
  name: string;
  age: number;
  isPassed: boolean;
}



type:

type ডেটার ধরন নির্ধারণ করে এবং সেই ধরনকে একটি নাম দিয়ে সহজভাবে ব্যবহার করা।

Example-

type User = {
  name: string;
  age: number;
};

const person: User = {
  name: "Rakib",
  age: 22,
};




2. What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript এ keyof কীওয়ার্ড ব্যবহার করা হয় কোনো object type এর সব property name কে union type হিসেবে বের করার জন্য।
এটা কোডের  property ব্যবহারের সম্ভাবনা কমায়।

keyof এর ব্যবহার

এটি যেobject এর শুধুমাত্র বৈধ key ব্যবহার করতে সাহায্য করে ।
Generic function এর সাথে ব্যবহার করলে reusable হয়। 

Example-

interface User {
  name: string;
  age: number;
}


type UserKeys = keyof User;

const key1: UserKeys = "name";
const key2: UserKeys = "age";  
const key3: UserKeys = "email"; // এইটা ভুল কারণ এইটা ইউসার এর ভিতরে নেই. তাই TypeScript error দেখাচ্ছে

তাই এটি ব্যবহার এর সব থেকে সুবিধা হলো keyof নিশ্চিত করে শুধুমাত্র বৈধ property name ব্যবহার হচ্ছে।


