import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieFilled = (props: IIcon) => {

  return (
    <Icon
      name='MovieFilled'

      short_name='Movie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-800 65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Z"/>
    </Icon>
  );
};

IconMaterialMovieFilled.displayName = 'OnesyIconMaterialMovieFilled';

export default IconMaterialMovieFilled;
