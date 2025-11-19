import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbsUpDown = (props: IIcon) => {

  return (
    <Icon
      name='ThumbsUpDown'

      short_name='ThumbsUpDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-400v-344l216-216 49 49-33 151h248v103L371-400H0Zm80-80h238l82-194v-6H134l24-108-78 76v232ZM744 0l-49-49 33-151H480v-103l109-257h371v344L744 0Zm58-172 78-76v-232H642l-82 194v6h266l-24 108ZM80-480v-232 232Zm800 232v-232 232Z"/>
    </Icon>
  );
};

IconMaterialThumbsUpDown.displayName = 'OnesyIconMaterialThumbsUpDown';

export default IconMaterialThumbsUpDown;
