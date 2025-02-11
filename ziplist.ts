/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// Works with any[] so disabled settings that prevented use of any[]

function zipList(list1: any[], list2: any[]): any[] {
  const ziplist: any[] = [];

  if (list1.length !== list2.length) {
    return ziplist;
  }

  for (let i = 0; i < list1.length; i++) {
    ziplist.push(list1[i]);
    ziplist.push(list2[i]);
  }

  return ziplist;
}

function zipListTheFunctionalWay(list1: any[], list2: any[]): any[] | undefined {
  let ziplist: any[] = [];

  if (list1.length !== list2.length) {
    return ziplist;
  }

  ziplist = list1.concat(list2);

  return ziplist;
}
