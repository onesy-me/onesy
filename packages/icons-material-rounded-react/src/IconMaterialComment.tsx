import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComment = (props: IIcon) => {

  return (
    <Icon
      name='Comment'

      short_name='Comment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400h400q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640ZM160-240q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v623q0 27-24.5 37.5T812-148l-92-92H160Zm594-80 46 45v-525H160v480h594Zm-594 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialComment.displayName = 'OnesyIconMaterialComment';

export default IconMaterialComment;
