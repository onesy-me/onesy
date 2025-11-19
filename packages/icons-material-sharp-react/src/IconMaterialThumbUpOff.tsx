import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbUpOff = (props: IIcon) => {

  return (
    <Icon
      name='ThumbUpOff'

      short_name='ThumbUpOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21V8l7-7 1.85 1.85L14.55 8H23v4.4L19.35 21Zm2-2h9l3-7v-2h-9l1.35-5.5L9 8.85ZM9 8.85V19ZM7 8v2H4v9h3v2H2V8Z"/>
    </Icon>
  );
};

IconMaterialThumbUpOff.displayName = 'OnesyIconMaterialThumbUpOff';

export default IconMaterialThumbUpOff;
