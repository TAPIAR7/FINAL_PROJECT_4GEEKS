"""empty message

Revision ID: 32f8f76cbe49
Revises: dfd35080b644
Create Date: 2021-05-16 00:40:44.605180

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '32f8f76cbe49'
down_revision = 'dfd35080b644'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('nombre', sa.String(length=120), nullable=False))
    op.add_column('product', sa.Column('marca', sa.String(length=120), nullable=False))
    op.add_column('product', sa.Column('categoria', sa.String(length=120), nullable=False))
    op.add_column('product', sa.Column('precio', sa.Integer(), nullable=False))
    op.add_column('product', sa.Column('item', sa.Integer(), nullable=False))
    op.drop_constraint('product_name_key', 'product', type_='unique')
    op.drop_constraint('product_price_key', 'product', type_='unique')
    op.create_unique_constraint(None, 'product', ['marca'])
    op.create_unique_constraint(None, 'product', ['categoria'])
    op.create_unique_constraint(None, 'product', ['precio'])
    op.create_unique_constraint(None, 'product', ['item'])
    op.create_unique_constraint(None, 'product', ['nombre'])
    op.drop_column('product', 'name')
    op.drop_column('product', 'price')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('price', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.add_column('product', sa.Column('name', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'product', type_='unique')
    op.drop_constraint(None, 'product', type_='unique')
    op.drop_constraint(None, 'product', type_='unique')
    op.drop_constraint(None, 'product', type_='unique')
    op.drop_constraint(None, 'product', type_='unique')
    op.create_unique_constraint('product_price_key', 'product', ['price'])
    op.create_unique_constraint('product_name_key', 'product', ['name'])
    op.drop_column('product', 'item')
    op.drop_column('product', 'precio')
    op.drop_column('product', 'categoria')
    op.drop_column('product', 'marca')
    op.drop_column('product', 'nombre')
    # ### end Alembic commands ###