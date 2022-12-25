export default function calculateTriangleAngles(a, b) {
  var c = Math.sqrt(a * a + b * b);
  var A = Math.acos((a * a + c * c - b * b) / (2 * a * c));
  var B = Math.acos((b * b + c * c - a * a) / (2 * b * c));
  var C = Math.PI - A - B;
  return {
    A: (A * 180) / Math.PI,
    B: (B * 180) / Math.PI,
    C: (C * 180) / Math.PI,
  };
}
