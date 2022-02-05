var findMedianSortedArrays = function(nums1, nums2) {
    let array = []

    let totalLen = (nums1.length + nums2.length)/2 + 1

    for(let i = 0; i < totalLen; i++) {
        array.push(nums1[i])
        array.push(nums2[i])
    }

    console.log(array)
}

const median = (nums1, nums2) => {
    let x = nums1.concat(nums2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a = [0,2,3,5,9];
  let b = [1,4];
  console.log(median(a,b));