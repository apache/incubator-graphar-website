"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[8571],{856:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var n=i(1527),a=i(395);const r={title:"Format Specification",sidebar_position:1},s=void 0,o={id:"specification/format",title:"Format Specification",description:"Property Graph",source:"@site/docs/specification/format.md",sourceDirName:"specification",slug:"/specification/format",permalink:"/docs/specification/format",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-graphar/edit/main/docs/specification/format.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Format Specification",sidebar_position:1},sidebar:"documentation",previous:{title:"Specification",permalink:"/docs/category/specification"},next:{title:"Implementation Status",permalink:"/docs/specification/implementation-status"}},l={},h=[{value:"Property Graph",id:"property-graph",level:2},{value:"Property Data Types",id:"property-data-types",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Vertex Chunk Size",id:"vertex-chunk-size",level:3},{value:"Edge Chunk Size",id:"edge-chunk-size",level:3},{value:"Data File Format",id:"data-file-format",level:3},{value:"Adjacency List Type",id:"adjacency-list-type",level:2},{value:"Vertex Chunks in GraphAr",id:"vertex-chunks-in-graphar",level:2},{value:"Logical table of vertices",id:"logical-table-of-vertices",level:3},{value:"Physical table of vertices",id:"physical-table-of-vertices",level:3},{value:"Edge Chunks in GraphAr",id:"edge-chunks-in-graphar",level:2},{value:"Logical table of edges",id:"logical-table-of-edges",level:3},{value:"Physical table of edges",id:"physical-table-of-edges",level:3},{value:"Information files",id:"information-files",level:2},{value:"Data files",id:"data-files",level:2},{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"property-graph",children:"Property Graph"}),"\n",(0,n.jsx)(t.p,{children:"GraphAr is designed for representing and storing the property graphs. Graph (in discrete mathematics) is a structure made of vertices and edges.\nProperty graph is then a type of graph model where the vertices/edges could carry a name (also called as type or label) and some properties.\nSince carrying additional information than non-property graphs, the property graph is able to represent\nconnections among data scattered across diverse data databases and with different schemas.\nCompared with the relational database schema, the property graph excels at showing data dependencies.\nTherefore, it is widely-used in modeling modern applications including social network analytics, data mining,\nnetwork routing, scientific computing and so on."}),"\n",(0,n.jsx)(t.p,{children:"A property graph consists of vertices and edges, with each vertex contains a unique identifier and:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A text label that describes the vertex type."}),"\n",(0,n.jsx)(t.li,{children:"A collection of properties, with each property can be represented by a key-value pair."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each edge contains a unique identifier and:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The outgoing vertex (source)."}),"\n",(0,n.jsx)(t.li,{children:"The incoming vertex (destination)."}),"\n",(0,n.jsx)(t.li,{children:"A text label that describes the relationship between the two vertices."}),"\n",(0,n.jsx)(t.li,{children:"A collection of properties."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'The following is an example property graph containing two types of vertices ("person" and "comment") and three types of edges.'}),"\n",(0,n.jsx)("img",{src:"../images/property_graph.png",alt:"property graph",width:"700",align:"center"}),"\n",(0,n.jsx)(t.h2,{id:"property-data-types",children:"Property Data Types"}),"\n",(0,n.jsx)(t.p,{children:"GraphAr support a set of built-in property data types that are common in real use cases and supported by most file types (CSV, ORC, Parquet), includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Boolean"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Int32"}),": Integer with 32 bits"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Int64"}),": Integer with 64 bits"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Float"}),": 32-bit floating point values"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Double"}),": 64-bit floating point values"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"String"}),": Textual data"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Date"}),": days since the Unix epoch"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Timestamp"}),": milliseconds since the Unix epoch"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Time"}),": milliseconds since midnight"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"List"}),": A list of values of the same type"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"GraphAr also supports the user-defined data types, which can be used to represent complex data structures,\nsuch as the struct, map, and union types."}),"\n",(0,n.jsx)(t.h2,{id:"configurations",children:"Configurations"}),"\n",(0,n.jsx)(t.h3,{id:"vertex-chunk-size",children:"Vertex Chunk Size"}),"\n",(0,n.jsx)(t.p,{children:"The vertex chunk size is a configuration parameter that determines the number of vertices in a vertex chunk\nand used to partition the logical vertex table into multiple physical vertex tables."}),"\n",(0,n.jsx)(t.p,{children:"The vertex chunk size should be set to a value that is large enough to reduce the overhead of reading/writing files,\nbut small enough to avoid reading/writing too many vertices at once. We recommend setting the vertex chunk size to\nempirical value 2^18 (262,144) for most cases."}),"\n",(0,n.jsx)(t.h3,{id:"edge-chunk-size",children:"Edge Chunk Size"}),"\n",(0,n.jsx)(t.p,{children:"The edge chunk size is a configuration parameter that determines the number of edges in an edge chunk\nand used to partition the logical edge table into multiple physical edge tables."}),"\n",(0,n.jsx)(t.p,{children:"The edge chunk size should be set to a value that is large enough to reduce the overhead of reading/writing files,\nbut small enough to avoid reading/writing too many edges at once. We recommend setting the edge chunk size to\nempirical value 2^22 (4,194,304) for most cases."}),"\n",(0,n.jsx)(t.h3,{id:"data-file-format",children:"Data File Format"}),"\n",(0,n.jsx)(t.p,{children:"GraphAr supports multiple file formats for storing the actual data of vertices and edges,\nincluding Apache ORC, Apache Parquet, CSV, and JSON."}),"\n",(0,n.jsx)(t.p,{children:"The file format should be chosen based on the specific use case and the data processing framework that will be used to\nprocess the graph data. For example, if the graph data will be processed using Apache Spark,\nthen the Apache Parquet file format is recommended."}),"\n",(0,n.jsx)(t.h2,{id:"adjacency-list-type",children:"Adjacency List Type"}),"\n",(0,n.jsx)(t.p,{children:"Adjacency list is a data structure used to represent the edges of a graph. GraphAr supports multiple types of adjacency lists for a given group of edges, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ordered_by_source"}),": all the edges in the logical table are ordered and further partitioned by the internal vertex id of the source, which can be seen as the CSR format."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ordered_by_dest"}),": all the edges in the logical table are ordered and further partitioned by the internal vertex id of the destination, which can be seen as the CSC format."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"unordered_by_source"}),": the internal id of the source vertex is used as the partition key to divide the edges into different sub-logical-tables, and the edges in each sub-logical-table are unordered, which can be seen as the COO format."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"unordered_by_dest"}),": the internal id of the destination vertex is used as the partition key to divide the edges into different sub-logical-tables, and the edges in each sub-logical-table are unordered, which can also be seen as the COO format."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"vertex-chunks-in-graphar",children:"Vertex Chunks in GraphAr"}),"\n",(0,n.jsx)(t.h3,{id:"logical-table-of-vertices",children:"Logical table of vertices"}),"\n",(0,n.jsx)(t.p,{children:'Each type of vertices (with the same label) constructs a logical vertex table, with each vertex assigned with a global index inside this type (called internal vertex id) starting from 0, corresponding to the row number of the vertex in the logical vertex table. An example layout for a logical table of vertices under the label "person" is provided for reference.'}),"\n",(0,n.jsx)(t.p,{children:"Given an internal vertex id and the vertex label, a vertex is uniquely identifiable and its respective properties can be accessed from this table. The internal vertex id is further used to identify the source and destination vertices when maintaining the topology of the graph."}),"\n",(0,n.jsx)("img",{src:"../images/vertex_logical_table.png",alt:"vertex logical table",width:"700",align:"center"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:'In the logical vertex table, some property can be marked as the primary key, such as the "id" column of the "person" table.'})}),"\n",(0,n.jsx)(t.h3,{id:"physical-table-of-vertices",children:"Physical table of vertices"}),"\n",(0,n.jsx)(t.p,{children:"The logical vertex table will be partitioned into multiple continuous vertex chunks for enhancing the reading/writing efficiency. To maintain the ability of random access, the size of vertex chunks for the same label is fixed. To support to access required properties avoiding reading all properties from the files, and to add properties for vertices without modifying the existing files, the columns of the logical table will be divided into several column groups."}),"\n",(0,n.jsx)(t.p,{children:'Take the "person" vertex table as an example, if the chunk size is set to be 500, the logical table will be separated into sub-logical-tables of 500 rows with the exception of the last one, which may have less than 500 rows. The columns for maintaining properties will also be divided into distinct groups (e.g., 2 for our example). As a result, a total of 4 physical vertex tables are created for storing the example logical table, which can be seen from the following figure.'}),"\n",(0,n.jsx)("img",{src:"../images/vertex_physical_table.png",alt:"vertex physical table",width:"700",align:"center"}),"\n",(0,n.jsx)(t.p,{children:"::: note"}),"\n",(0,n.jsx)(t.p,{children:"For efficiently utilize the filter push-down of the payload file format like Parquet, the internal vertex id is stored in the payload file as a column. And since the internal vertex id is continuous, the payload file format can use the delta encoding for the internal vertex id column, which would not bring too much overhead for the storage."}),"\n",(0,n.jsx)(t.p,{children:":::"}),"\n",(0,n.jsx)(t.h2,{id:"edge-chunks-in-graphar",children:"Edge Chunks in GraphAr"}),"\n",(0,n.jsx)(t.h3,{id:"logical-table-of-edges",children:"Logical table of edges"}),"\n",(0,n.jsxs)(t.p,{children:["For maintaining a type of edges (that with the same triplet of the source label, edge label, and destination label), a logical edge table is established.  And in order to support quickly creating a graph from the graph storage file, the logical edge table could maintain the topology information in a way similar to CSR/CSC (learn more about ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Sparse_matrix",children:"CSR/CSC"}),"), that is, the edges are ordered by the internal vertex id of either source or destination. In this way, an offset table is required to store the start offset for each vertex's edges, and the edges with the same source/destination will be stored continuously in the logical table."]}),"\n",(0,n.jsx)(t.p,{children:'Take the logical table for "person likes person" edges as an example, the logical edge table looks like:'}),"\n",(0,n.jsx)("img",{src:"../images/edge_logical_table.png",alt:"edge logical table",width:"700",align:"center"}),"\n",(0,n.jsx)(t.h3,{id:"physical-table-of-edges",children:"Physical table of edges"}),"\n",(0,n.jsx)(t.p,{children:"As same with the vertex table, the logical edge table is also partitioned into some sub-logical-tables, with each sub-logical-table contains edges that the source (or destination) vertices are in the same vertex chunk. According to the partition strategy and the order of the edges, edges can be stored in GraphAr following the setting adjacency list type."}),"\n",(0,n.jsx)(t.p,{children:"After that, the whole logical table of edges will be divided into multiple sub-logical-tables with each sub-logical-table contains edges that the source (or destination) vertices are in the same vertex chunk. Then, a sub-logical-table is further divided into edge chunks of a predefined, fixed number of rows (referred to as edge chunk size). Finally, an edge chunk is separated into physical tables in the following way:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"an adjList table (which contains only two columns: the internal vertex id of the source and the destination)."}),"\n",(0,n.jsx)(t.li,{children:"0 or more property group tables (each contains the properties of the edges)."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, there would be an offset table for ",(0,n.jsx)(t.strong,{children:"ordered_by_source"})," or ",(0,n.jsx)(t.strong,{children:"ordered_by_dest"})," edges. The offset table is used to record the starting point of the edges for each vertex. The partition of the offset table should be in alignment with the partition of the corresponding vertex table. The first row of each offset chunk is always 0, indicating the starting point for the corresponding sub-logical-table for edges."]}),"\n",(0,n.jsxs)(t.p,{children:['Take the "person knows person" edges to illustrate. Suppose the vertex chunk size is set to 500 and the edge chunk size is 1024, and the edges are ',(0,n.jsx)(t.strong,{children:"ordered_by_source"}),", then the edges could be saved in the following physical tables:"]}),"\n",(0,n.jsx)("img",{src:"../images/edge_physical_table1.png",alt:"edge physical table1",width:"700",align:"center"}),"\n",(0,n.jsx)("img",{src:"../images/edge_physical_table2.png",alt:"edge physical table2",width:"700",align:"center"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Tip:"})," When the edge type is ",(0,n.jsx)(t.strong,{children:"ordered_by_source"}),", the sorted adjList table together with the offset table can be used as CSR, supporting the fast access of the outgoing edges for a given vertex. Similarly, a CSC view can be constructed by sorting the edges by destination and recording corresponding offsets, supporting the fast access of the incoming edges for a given vertex."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"information-files",children:"Information files"}),"\n",(0,n.jsxs)(t.p,{children:["GraphAr uses two kinds of files to store a graph: a group of Yaml files to describe metadata information; and data files to store actual data for vertices and edges.",(0,n.jsx)(t.br,{}),"\n",'A graph information file which named "<name>.graph.yml" describes the meta information for a graph whose name is <name>. The content of this file includes:']}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the graph name;"}),"\n",(0,n.jsx)(t.li,{children:"the root directory path of the data files;"}),"\n",(0,n.jsx)(t.li,{children:"the vertex information and edge information files included;"}),"\n",(0,n.jsx)(t.li,{children:"the version of GraphAr."}),"\n",(0,n.jsx)(t.li,{children:"extra information for the graph, could be used for user defined information."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'A vertex information file which named "<label>.vertex.yml" defines a single group of vertices with the same vertex label <label>, and all vertices in this group have the same schema. The file defines:'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the vertex label;"}),"\n",(0,n.jsx)(t.li,{children:"the vertex chunk size;"}),"\n",(0,n.jsx)(t.li,{children:"the relative path for vertex data files;"}),"\n",(0,n.jsx)(t.li,{children:"the property groups attached: each property group has its own file type and the prefix for the path of its data files, it also lists all properties in this group, with every property containing its own name, data type, flagging of whether it is the primary key or not and flagging of whether it is nullable or not for non-primary key properties;"}),"\n",(0,n.jsx)(t.li,{children:"the version of GraphAr."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:['An edge information file which named "<source label>',(0,n.jsx)(t.em,{children:"<edge label>"}),'<destination label>.edge.yml" defines a single group of edges with specific label for source vertex, destination vertex and the edge. It describes the meta information for these edges, includes:']}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the source/edge/destination labels;"}),"\n",(0,n.jsx)(t.li,{children:"the edge chunk size, the source vertex chunk size and the destination vertex chunk size;"}),"\n",(0,n.jsx)(t.li,{children:"if the edges are directed or not;"}),"\n",(0,n.jsx)(t.li,{children:"the relative path for edge data files;"}),"\n",(0,n.jsx)(t.li,{children:"which kinds of adjList it includes: for each kind of adjList, the adjList type, the prefix of file path, the file type;"}),"\n",(0,n.jsx)(t.li,{children:"the property groups attached to the edge for all adjLists;"}),"\n",(0,n.jsx)(t.li,{children:"the version of GraphAr."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Please note that GraphAr supports the storage of multiple types of adjLists for a given group of edges, e.g., a group of edges could be accessed in both CSR and CSC way when two copies (one is ",(0,n.jsx)(t.strong,{children:"ordered_by_source"})," and the other is ",(0,n.jsx)(t.strong,{children:"ordered_by_dest"}),") of the relevant data are present in GraphAr."]})}),"\n",(0,n.jsxs)(t.p,{children:["See also ",(0,n.jsx)(t.a,{href:"https://graphar.apache.org/docs/libraries/cpp/getting-started#gar-information-files",children:"Gar Information Files"})," for an example."]}),"\n",(0,n.jsx)(t.h2,{id:"data-files",children:"Data files"}),"\n",(0,n.jsx)(t.p,{children:"As previously mentioned, each logical vertex/edge table is divided into multiple physical tables stored in one of the following file formats:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://orc.apache.org/",children:"Apache ORC"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://parquet.apache.org/",children:"Apache Parquet"})}),"\n",(0,n.jsx)(t.li,{children:"CSV"}),"\n",(0,n.jsx)(t.li,{children:"JSON"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Both of Apache ORC and Apache Parquet are column-oriented data storage formats. In practice of graph processing, it is common to only query a subset of columns of the properties. Thus, the column-oriented formats are more efficient, which eliminate the need to read columns that are not relevant. They are also used by a large number of data processing frameworks like ",(0,n.jsx)(t.a,{href:"https://spark.apache.org/",children:"Apache Spark"}),", ",(0,n.jsx)(t.a,{href:"https://hive.apache.org/",children:"Apache Hive"}),", ",(0,n.jsx)(t.a,{href:"https://flink.apache.org/",children:"Apache Flink"}),", and ",(0,n.jsx)(t.a,{href:"https://hadoop.apache.org/",children:"Apache Hadoop"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["See also ",(0,n.jsx)(t.a,{href:"https://graphar.apache.org/docs/libraries/cpp/getting-started#gar-data-files",children:"GraphAr Data Files"})," for an example."]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsxs)(t.p,{children:["The GraphAr libraries may implement part of the GraphAr format. The implementation status of the GraphAr libraries can refer to the ",(0,n.jsx)(t.a,{href:"/docs/specification/implementation-status",children:"GraphAr implementation status"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},395:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>s});var n=i(959);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);