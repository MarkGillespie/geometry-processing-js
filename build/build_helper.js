import Vertex from "../node/core/vertex.js";
import Corner from "../node/core/corner.js";
import Edge from "../node/core/edge.js";
import Halfedge from "../node/core/halfedge.js";
import Face from "../node/core/face.js";
import Mesh_exports from "../node/core/mesh.js";
const [Mesh, indexElements] = Mesh_exports;
import Geometry_exports from "../node/core/geometry.js";
const [Geometry, normalize] = Geometry_exports;
import DEC from "../node/core/discrete-exterior-calculus.js";

// Linear Algebra
import linalg from "../node/linear-algebra/linear-algebra.js";
const Vector = linalg.Vector;
const memoryManager = linalg.memoryManager;
const Complex = linalg.Complex;
const DenseMatrix = linalg.DenseMatrix;
const SparseMatrix = linalg.SparseMatrix;
const Triplet = linalg.Triplet;
const ComplexDenseMatrix = linalg.ComplexDenseMatrix;
const ComplexSparseMatrix = linalg.ComplexSparseMatrix;
const ComplexTriplet = linalg.ComplexTriplet;

// Utils
import Distortion from "../node/utils/distortion.js";
import colormap_exports from "../node/utils/colormap.js";
const colormap = colormap_exports.colormap;
const seismic = colormap_exports.seismic;
const coolwarm = colormap_exports.coolwarm;
const hot = colormap_exports.hot;
import Solvers from "../node/utils/solvers.js";
import MeshIO from "../node/utils/meshio.js";

export {
  // Core
  Vertex,
  Corner,
  Edge,
  Halfedge,
  Face,
  Mesh,
  indexElements,
  Geometry,
  DEC,
  // Linear Algebra
  Complex,
  ComplexDenseMatrix,
  DenseMatrix,
  ComplexSparseMatrix,
  SparseMatrix,
  Vector,
  Triplet,
  ComplexTriplet,
  memoryManager,
  // Utils
  Distortion,
  colormap,
  seismic,
  coolwarm,
  hot,
  Solvers,
  MeshIO,
};
