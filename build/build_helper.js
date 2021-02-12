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

// Projects
import SpectralConformalParameterization from "../node/projects/parameterization/spectral-conformal-parameterization.js";
import BoundaryFirstFlattening from "../node/projects/parameterization/boundary-first-flattening.js";
import TrivialConnections from "../node/projects/direction-field-design/trivial-connections.js";
import HeatMethod from "../node/projects/geodesic-distance/heat-method.js";
import MeanCurvatureFlow from "../node/projects/geometric-flow/mean-curvature-flow.js";
import ModifiedMeanCurvatureFlow from "../node/projects/geometric-flow/modified-mean-curvature-flow.js";
import ScalarPoissonProblem from "../node/projects/poisson-problem/scalar-poisson-problem.js";
import HarmonicBases from "../node/projects/vector-field-decomposition/harmonic-bases.js";
import HodgeDecomposition from "../node/projects/vector-field-decomposition/hodge-decomposition.js";
import TreeCotree from "../node/projects/vector-field-decomposition/tree-cotree.js";

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
  //Projects
  SpectralConformalParameterization,
  BoundaryFirstFlattening,
  TrivialConnections,
  HeatMethod,
  MeanCurvatureFlow,
  ModifiedMeanCurvatureFlow,
  ScalarPoissonProblem,
  HarmonicBases,
  HodgeDecomposition,
  TreeCotree,
  // Utils
  Distortion,
  colormap,
  seismic,
  coolwarm,
  hot,
  Solvers,
  MeshIO,
};
