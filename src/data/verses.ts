export interface VersePair {
  id: number;
  majority: {
    reference: string;
    text: string;
  };
  wolf: {
    reference: string;
    text: string;
  };
}

export const verses: VersePair[] = [
  {
    id: 1,
    majority: {
      reference: "ヨハネによる福音書 3:16",
      text: "神は、その独り子をお与えになったほどに、世を愛された。独り子を信じる者が一人も滅びないで、永遠の命を得るためである。",
    },
    wolf: {
      reference: "ローマの信徒への手紙 5:8",
      text: "しかし、わたしたちがまだ罪人であったとき、キリストがわたしたちのために死んでくださったことにより、神はわたしたちに対する愛を示されました。",
    },
  },
  {
    id: 2,
    majority: {
      reference: "詩編 23:1",
      text: "主は羊飼い、わたしには何も欠けることがない。",
    },
    wolf: {
      reference: "ヨハネによる福音書 10:11",
      text: "わたしは良い羊飼いである。良い羊飼いは羊のために命を捨てる。",
    },
  },
  {
    id: 3,
    majority: {
      reference: "マタイによる福音書 5:13",
      text: "あなたがたは地の塩である。だが、塩に塩気がなくなれば、その塩は何によって塩味が付けられよう。",
    },
    wolf: {
      reference: "マタイによる福音書 5:14",
      text: "あなたがたは世の光である。山の上にある町は、隠れることができない。",
    },
  },
];
