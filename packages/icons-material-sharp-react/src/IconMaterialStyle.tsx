import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStyle = (props: IIcon) => {

  return (
    <Icon
      name='Style'

      short_name='Style'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M159-168 51-212l108-234v278Zm80-232L354-80H239v-320ZM449-56 215-698l454-166 234 642L449-56Zm-10-504q17 0 28.5-11.5T479-600q0-17-11.5-28.5T439-640q-17 0-28.5 11.5T399-600q0 17 11.5 28.5T439-560Zm58 400 302-110-178-490-302 110 178 490ZM319-650l302-110-302 110Z"/>
    </Icon>
  );
};

IconMaterialStyle.displayName = 'OnesyIconMaterialStyle';

export default IconMaterialStyle;
