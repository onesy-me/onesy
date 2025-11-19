import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileLandscapeFilled = (props: IIcon) => {

  return (
    <Icon
      name='MobileLandscapeFilled'

      short_name='MobileLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h204v-40h192v40h484v560H40Zm160-240q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Z"/>
    </Icon>
  );
};

IconMaterialMobileLandscapeFilled.displayName = 'OnesyIconMaterialMobileLandscapeFilled';

export default IconMaterialMobileLandscapeFilled;
