import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartSquare = (props: IIcon) => {

  return (
    <Icon
      name='LineStartSquare'

      short_name='LineStartSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-340h280v-280H160v280Zm-40 80q-17 0-28.5-11.5T80-300v-360q0-17 11.5-28.5T120-700h360q17 0 28.5 11.5T520-660v140h320q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H520v140q0 17-11.5 28.5T480-260H120Zm180-220Z"/>
    </Icon>
  );
};

IconMaterialLineStartSquare.displayName = 'OnesyIconMaterialLineStartSquare';

export default IconMaterialLineStartSquare;
