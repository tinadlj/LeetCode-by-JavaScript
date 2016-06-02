/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var area=(D-B)*(C-A) + (H-F)*(G-E);
  
  if(E>C || B>H || A>G || F>D){
      return area;
  }
  
  var left=Math.max(A,E);
  var bottom=Math.max(B,F);
  var right=Math.min(C,G);
  var top = Math.min(D,H);
  
  return area-(top-bottom)*(right-left);
};
