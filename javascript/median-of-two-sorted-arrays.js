var findMedianSortedArrays = function(nums1, nums2) {
    let array = nums1.concat(nums2);
    array.sort(function (a,b) {
      return a - b;
    });
    let len = array.length;
    
    return len%2 === 0 ? (array[Math.floor(len/2)-1] + array[Math.ceil(len/2)])/2 : array[Math.floor(len/2)];
}