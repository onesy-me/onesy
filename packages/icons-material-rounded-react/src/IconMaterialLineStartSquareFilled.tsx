import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartSquareFilled = (props: IIcon) => {

  return (
    <Icon
      name='LineStartSquareFilled'

      short_name='LineStartSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-260q-17 0-28.5-11.5T80-300v-360q0-17 11.5-28.5T120-700h360q17 0 28.5 11.5T520-660v140h320q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H520v140q0 17-11.5 28.5T480-260H120Z"/>
    </Icon>
  );
};

IconMaterialLineStartSquareFilled.displayName = 'OnesyIconMaterialLineStartSquareFilled';

export default IconMaterialLineStartSquareFilled;
