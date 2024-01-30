export default (variables, { tpl }) => tpl`
${variables.imports};

${variables.interfaces};

const ${`${variables.componentName}: React.FC<SVGProps<SVGSVGElement>>`} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
