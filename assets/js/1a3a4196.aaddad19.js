"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[2317],{3738:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(1527),n=a(395);const i={id:"java",title:"Java Library",sidebar_position:2},o=void 0,s={id:"libraries/java/java",title:"Java Library",description:"Overview",source:"@site/docs/libraries/java/java.md",sourceDirName:"libraries/java",slug:"/libraries/java/",permalink:"/docs/libraries/java/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-graphar/edit/main/docs/libraries/java/java.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"java",title:"Java Library",sidebar_position:2},sidebar:"documentation",previous:{title:"Convert SNAP Datasets to GraphAr Format",permalink:"/docs/libraries/cpp/examples/snap-to-graphar"},next:{title:"How to Develop Java Library",permalink:"/docs/libraries/java/how_to_develop_java"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Get GraphAr Java Library",id:"get-graphar-java-library",level:2},{value:"Building from source",id:"building-from-source",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Information classes",id:"information-classes",level:3},{value:"Writers",id:"writers",level:3},{value:"Readers",id:"readers",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(r.p,{children:["Based on an efficient FFI for Java and C++ called\n",(0,t.jsx)(r.a,{href:"https://github.com/alibaba/fastFFI",children:"fastFFI"}),", the GraphAr Java\nlibrary allows users to write Java for generating, loading and\ntransforming GAR files. It consists of several components:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Information Classes"}),": As same with in the C++ library, the\ninformation classes are implemented to construct and access the meta\ninformation about the ",(0,t.jsx)(r.strong,{children:"graphs"}),", ",(0,t.jsx)(r.strong,{children:"vertices"})," and ",(0,t.jsx)(r.strong,{children:"edges"})," in\nGraphAr."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Writers"}),": The GraphAr Java writer provides a set of interfaces\nthat can be used to write Apache Arrow VectorSchemaRoot into GAR\nfiles. Every time it takes a VectorSchemaRoot as the logical table\nfor a type of vertices or edges, then convert it to ArrowTable, and\nthen dumps it to standard GAR files (CSV, ORC or Parquet files) under\nthe specific directory path."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Readers"}),": The GraphAr Java reader provides a set of interfaces\nthat can be used to read GAR files. It reads a collection of vertices\nor edges at a time and assembles the result into the ArrowTable.\nSimilar with the reader in the C++ library, it supports the users to\nspecify the data they need, e.g., reading a single property group\ninstead of all properties."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"get-graphar-java-library",children:"Get GraphAr Java Library"}),"\n",(0,t.jsx)(r.h3,{id:"building-from-source",children:"Building from source"}),"\n",(0,t.jsx)(r.p,{children:"Only support installing from source currently, but we will support\ninstalling from Maven in the future."}),"\n",(0,t.jsxs)(r.p,{children:["Firstly, install llvm-11. ",(0,t.jsx)(r.code,{children:"LLVM11_HOME"})," should point to the home of\nLLVM 11. In Ubuntu, it is at ",(0,t.jsx)(r.code,{children:"/usr/lib/llvm-11"}),". Basically, the build\nprocedure the following binary:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"$LLVM11_HOME/bin/clang++"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"$LLVM11_HOME/bin/ld.lld"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"$LLVM11_HOME/lib/cmake/llvm"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Tips:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Use Ubuntu as example:"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ sudo apt-get install llvm-11 clang-11 lld-11 libclang-11-dev libz-dev -y\n$ export LLVM11_HOME=/usr/lib/llvm-11\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Or compile from source with this ",(0,t.jsx)(r.a,{href:"https://github.com/alibaba/fastFFI/blob/main/docker/install-llvm11.sh",children:"script"}),":"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ export LLVM11_HOME=/usr/lib/llvm-11\n$ export LLVM_VAR=11.0.0\n$ sudo ./install-llvm11.sh\n"})}),"\n",(0,t.jsx)(r.p,{children:"Make the graphar-java-library directory as the current working\ndirectory:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ git clone https://github.com/apache/incubator-graphar.git\n$ cd GraphAr\n$ git submodule update --init\n$ cd java\n"})}),"\n",(0,t.jsx)(r.p,{children:"Compile package:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ mvn clean install -DskipTests\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This will build GraphAr C++ library internally for Java. If you already installed GraphAr C++ library in your system,\nyou can append this option to skip: ",(0,t.jsx)(r.code,{children:"-DbuildGarCPP=OFF"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Then set GraphAr as a dependency in maven project:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"<dependencies>\n    <dependency>\n      <groupId>org.apache.graphar</groupId>\n      <artifactId>gar-java</artifactId>\n      <version>0.1.0</version>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,t.jsx)(r.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(r.h3,{id:"information-classes",children:"Information classes"}),"\n",(0,t.jsx)(r.p,{children:"The Java library for GraphAr provides distinct information classes for\nconstructing and accessing meta information about graphs, vertices, and\nedges. These classes act as essential parameters for constructing\nreaders and writers, and they can be built either from the existing meta\nfiles (in the Yaml format) or in-memory from scratch."}),"\n",(0,t.jsx)(r.p,{children:"To construct information from a Yaml file, please refer to the following\nexample code."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"// read graph yaml and construct information\nString path = ...; // the path to the yaml file\nResult<GraphInfo> graphInfoResult = GraphInfo.load(path);\nif (!graphInfoResult.hasError()) {\n    GraphInfo graphInfo = graphInfoResult.value();\n    // use information classes\n    StdMap<StdString, VertexInfo> vertexInfos = graphInfo.getVertexInfos();\n    StdMap<StdString, EdgeInfo> edgeInfos = graphInfo.getEdgeInfos();\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-graphar/tree/main/java/src/test/java/com/apache/incubator-graphar/graphinfo",children:"test for\ngraphinfo"}),"\nfor the complete example."]}),"\n",(0,t.jsx)(r.h3,{id:"writers",children:"Writers"}),"\n",(0,t.jsx)(r.p,{children:"The GraphAr Java writers wrap C++ interfaces to write arrow::Table into GraphAr\nformatted files in a batch-import fashion. But arrow::Table is not easy\nto build in Java. Instead, the GraphAr Java library provide a static\nmethod to convert VectorSchemaRoot into arrow::Table. Warning: There are\nsome problems concerning this method which lead to memory leaks. We will\nfix it or rewrite writers with Apache arrow Java."}),"\n",(0,t.jsx)(r.p,{children:"With the VertexWriter, users can specify a particular property group to\nbe written into its corresponding chunks, or choose to write all\nproperty groups. For edge chunks, besides the meta data (edge info), the\nadjList type should also be specified. The adjList/properties can be\nwritten alone, or alternatively, all adjList, properties, and the offset\n(for CSR and CSC format) chunks can be written simultaneously."}),"\n",(0,t.jsx)(r.p,{children:"To utilize the GAR Java writer, please refer to the following example\ncode."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'// common steps to construct VectorSchemaRoot\nString uri = "file:" + ...; // data source\nScanOptions options = new ScanOptions(/*batchSize*/ 32768);\nStdSharedPtr<ArrowTable> table = null;\ntry (BufferAllocator allocator = new RootAllocator();\n        DatasetFactory datasetFactory =\n           new FileSystemDatasetFactory(\n                   allocator, NativeMemoryPool.getDefault(), FileFormat.PARQUET, uri);\n        Dataset dataset = datasetFactory.finish();\n        Scanner scanner = dataset.newScan(options);\n        ArrowReader reader = scanner.scanBatches()) {\n    while (reader.loadNextBatch()) {\n        try (VectorSchemaRoot root = reader.getVectorSchemaRoot()) {\n            // convert VectorSchemaRoot to ArrowTable\n            table = ArrowTable.fromVectorSchemaRoot(allocator, root, reader);\n        }\n    }\n} catch (Exception e) {\n            e.printStackTrace();\n}\n\n// construct writer object\nString path = ...; // file to be wrote\nStdString edgeMetaFile = StdString.create(path);\nStdSharedPtr<Yaml> edgeMeta = Yaml.loadFile(edgeMetaFile).value();\nEdgeInfo edgeInfo = EdgeInfo.load(edgeMeta).value();\nEdgeChunkWriter writer = EdgeChunkWriter.factory.create(\n                        edgeInfo, StdString.create("/tmp/"), AdjListType.ordered_by_source);\n\n// write table with writer object\nwriter.sortAndWriteAdjListTable(table, 0, 0); // Write adj list of vertex chunk 0 to files\n'})}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-graphar/tree/main/java/src/test/java/com/apache/incubator-graphar/writers",children:"test for\nwriters"}),"\nfor the complete example."]}),"\n",(0,t.jsx)(r.h3,{id:"readers",children:"Readers"}),"\n",(0,t.jsx)(r.p,{children:"The GraphAr Java reader provides an extensive set of interfaces to read\nGAR files. It reads a collection of vertices or edges at a time as\nArrowTable. Similar with the reader in C++ library, it supports the\nusers to specify the data they need, e.g., a single property group."}),"\n",(0,t.jsx)(r.p,{children:"To utilize the GAR Java reader, please refer to the following example\ncode."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'// construct vertex chunk reader\nGraphInfo graphInfo = ...; // load graph meta info\nStdString label = StdString.create("person");\nStdString propertyName = StdString.create("id");\nif (graphInfo.getVertexInfo(label).hasError()) {\n    // throw Exception or do other things\n}\nPropertyGroup group = graphInfo.getVertexPropertyGroup(label, propertyName).value();\nResult<VertexPropertyArrowChunkReader> maybeReader =\n                GrapharStaticFunctions.INSTANCE.constructVertexPropertyArrowChunkReader(\n                        graphInfo, label, group);\n// check reader\'s status if needed\nVertexPropertyArrowChunkReader reader = maybeReader.value();\nResult<StdSharedPtr<ArrowTable>> result = reader.getChunk();\n// check table\'s status if needed\nStdSharedPtr<ArrowTable> table = result.value();\nStdPair<Long, Long> range = reader.getRange().value();\n'})}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-graphar/tree/main/java/src/test/java/com/apache/incubator-graphar/readers",children:"test for\nreaders"}),"\nfor the complete example."]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},395:(e,r,a)=>{a.d(r,{Z:()=>s,a:()=>o});var t=a(959);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);